import * as vscode from 'vscode';
import { kebabCase, bigCamelize } from './utils';
import { componentMap } from './componentMap';
import { ComponentDesc } from './componentDesc';

const DOC = 'https://nutui.jd.com/#';

const LINK_REG = /(?<=<nut-)([\w-]+)/g;
const BIG_LINK_REG = /(?<=<Nut-)([\w-])+/g;
const files = ['vue', 'typescript', 'javascript', 'react'];

const provideHover = (document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) => {
  const line = document.lineAt(position);
  const componentLink = line.text.match(LINK_REG) ?? [];
  const componentBigLink = line.text.match(BIG_LINK_REG) ?? [];
  const components = [...new Set([...componentLink, ...componentBigLink.map(kebabCase)])];

  if (components.length) {
    const text = components
      .filter((item: string) => componentMap[item])
      .map((item: string) => {
        const { site } = componentMap[item];

        return new vscode.MarkdownString(
          `[NutUI -> $(references) 请查看 ${bigCamelize(item)} 组件官方文档](${DOC}${site})\n`,
          true
        );
      });

    return new vscode.Hover(text);
  }
};

const provideCompletionItems = () => {
  const completionItems: vscode.CompletionItem[] = [];
  Object.keys(componentMap).forEach((key: string) => {
    completionItems.push(
      new vscode.CompletionItem(`nut-${key}`, vscode.CompletionItemKind.Field),
      new vscode.CompletionItem(bigCamelize(`nut-${key}`), vscode.CompletionItemKind.Field)
    );
  });
  return completionItems;
};

const resolveCompletionItem = (item: vscode.CompletionItem) => {
  const name = kebabCase(<string>item.label).slice(4);
  const descriptor: ComponentDesc = componentMap[name];

  const propsText = descriptor.props ? descriptor.props : '';
  const tagSuffix = `</${item.label}>`;
  item.insertText = `<${item.label} ${propsText}>${tagSuffix}`;

  item.command = {
    title: 'nutui-move-cursor',
    command: 'nutui-move-cursor',
    arguments: [-tagSuffix.length - 2]
  };
  return item;
};

const moveCursor = (characterDelta: number) => {
  const active = vscode.window.activeTextEditor!.selection.active!;
  const position = active.translate({ characterDelta });
  vscode.window.activeTextEditor!.selection = new vscode.Selection(position, position);
};

export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('nutui-move-cursor', moveCursor);
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(files, {
      provideHover
    }),
    vscode.languages.registerCompletionItemProvider(files, {
      provideCompletionItems,
      resolveCompletionItem
    })
  );
}

export function deactivate() {}
