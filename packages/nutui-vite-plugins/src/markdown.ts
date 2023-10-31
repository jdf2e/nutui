import Markdown from 'unplugin-vue-markdown/vite';
import MarkdownIt from 'markdown-it-container';
import hljs from 'highlight.js';
import LZUTF8 from 'lzutf8';
import fs from 'fs-extra';
import path from 'path';

function compressText(str: string): any {
  // @ts-ignore
  return LZUTF8.encodeBase64(LZUTF8.compress(str, { outputEncoding: 'ByteArray' }));
}

interface MarkdownOptions {
  docRoot: string;
}

export default function markdown(options: MarkdownOptions) {
  return Markdown({
    markdownItOptions: {
      typographer: false,
      highlight: function (str, lang) {
        if (lang && (lang === 'vue' || hljs.getLanguage(lang))) {
          return hljs.highlight(str, {
            language: lang === 'vue' ? 'html' : lang
          }).value;
        }
        return '';
      }
    },
    markdownItSetup(md) {
      md.use(MarkdownIt, 'demo', {
        validate: function (params: any) {
          return params.match(/^demo\s*(.*)$/);
        },

        render: function (tokens: any, idx: any) {
          const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
          if (tokens[idx].nesting === 1) {
            // opening tag
            const contentHtml = compressText(tokens[idx + 1].content);
            return `<demo-block data-type="vue" data-value="${contentHtml}">` + md.utils.escapeHtml(m[1]) + '\n';
          } else {
            // closing tag
            return '</demo-block>\n';
          }
        }
      });

      md.use(MarkdownIt, 'mode1', {
        validate: function (params: any) {
          return params.match(/^mode1\s*(.*)$/);
        },

        render: function (tokens: any, idx: any) {
          const m = tokens[idx].info.trim().match(/^mode1\s*(.*)$/);
          console.log('m', m);
          if (tokens[idx].nesting === 1) {
            // opening tag
            const sourceFileToken = tokens[idx + 2];
            let code = '';
            const sourceFile = sourceFileToken.children?.[0].content ?? '';
            console.log('sourceFile', sourceFile);
            if (sourceFileToken.type === 'inline') {
              const [left, right] = sourceFile.split(' ');
              code = fs.readFileSync(path.resolve(options.docRoot, left, 'demo', `${right}.vue`), 'utf-8');
            }
            if (!code) throw new Error(`File error: ${sourceFile}`);
            // const newCode = hljs.highlight(code, 'html').value;
            tokens[idx + 2].content = code;

            return (
              `<demo-block code="${compressText(code)}" data-type="vue" data-value="${compressText(code)}">` + '\n'
            );
          } else {
            // closing tag
            return '</demo-block>\n';
          }
        }
      });
    }
  });
}
