import linguistLanguages from 'linguist-languages';
import { printers as MarkdownPrinter, parsers as MarkdownParsers } from 'prettier/plugins/markdown';

export const languages = [
  {
    ...linguistLanguages.Markdown,
    parsers: ['markdown']
  }
];

export const parsers = {
  markdown: {
    ...MarkdownParsers.markdown
  }
};

export const printers = {
  mdast: {
    ...MarkdownPrinter.mdast,
    print: pluginPrint
  }
};

function pluginPrint(path, options, print) {
  const node = path.getValue();

  if (node.type == 'table') {
    return printTable(path, options, print);
  }
  return MarkdownPrinter.mdast.print(path, options, print);
}

function printTable(path, options, print) {
  const columnMaxWidths = [];
  const contents = path.map(
    () =>
      path.map(() => {
        const text = print().flat();
        return { text };
      }, 'children'),
    'children'
  );

  const alignedTable = printTableContents();
  return [alignedTable];

  function printTableContents() {
    /** @type{Doc[]} */
    const parts = [printRow(contents[0]), printAlign()];
    if (contents.length > 1) {
      parts.push(contents.slice(1).map((rowContents) => printRow(rowContents)));
    }
    return parts;
  }

  function printAlign() {
    const align = columnMaxWidths.map(() => {
      return ` --- `;
    });

    return `| ${align.join(' | ')} |\n`;
  }

  function printRow(rowContents) {
    const columns = rowContents.map(({ text }) => {
      return ` ${text} `;
    });
    return `|${columns.join('|')}|\n`;
  }
}
