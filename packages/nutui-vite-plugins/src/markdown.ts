import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownIt from 'markdown-it-container'
import Shiki from '@shikijs/markdown-it'
import LZUTF8 from 'lzutf8'
import fs from 'fs-extra'
import path from 'path'
import { Plugin } from 'vite'

function compressText(str: string): any {
  // @ts-ignore
  return LZUTF8.encodeBase64(LZUTF8.compress(str, { outputEncoding: 'ByteArray' }))
}

interface MarkdownOptions {
  docTaroRoot: string
  docRoot: string
}

const fileRegex = /\.md$/

const TransformMarkdownDemo = (options: MarkdownOptions): Plugin => {
  return {
    name: 'nutui-transform-markdown-demo',
    enforce: 'pre',
    transform(src, id) {
      if (fileRegex.test(id)) {
        return {
          code: src.replace(/> demo: ([-0-9a-z .]*)[\n|\r\n]/g, (_match, $1: string) => {
            const [comp, demo, type] = $1.split(' ')
            const docPath = type
              ? path.resolve(options.docTaroRoot, type, 'pages', comp, `${demo}.vue`)
              : path.resolve(options.docRoot, comp, 'demo', `${demo}.vue`)
            let code = ''
            try {
              code = fs.readFileSync(docPath, 'utf-8')
            } catch (err) {
              code = '[@nutui/vite-plugins] File not found: ' + docPath
              console.warn(code)
            }
            return code
              ? `:::demo

\`\`\`vue
${code}
\`\`\`

:::\n`
              : ''
          }),
          map: null // 如果可行将提供 source map
        }
      }
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function markdown(options: MarkdownOptions) {
  return [
    TransformMarkdownDemo(options),
    Markdown({
      markdownItOptions: {
        typographer: false
      },
      markdownItSetup: async (md) => {
        md.use(MarkdownIt, 'demo', {
          validate: function (params: any) {
            return params.match(/^demo\s*(.*)$/)
          },
          render: function (tokens: any, idx: any) {
            const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
            if (tokens[idx].nesting === 1) {
              // opening tag
              const contentHtml = compressText(tokens[idx + 1].content)
              return `<demo-block data-type="vue" data-value="${contentHtml}">` + md.utils.escapeHtml(m[1]) + '\n'
            } else {
              // closing tag
              return '</demo-block>\n'
            }
          }
        })
        md.use(
          await Shiki({
            themes: {
              light: 'github-light',
              dark: 'github-dark'
            }
          })
        )
      }
    })
  ]
}
