import linguistLanguages from 'linguist-languages'
import { printers as MarkdownPrinter, parsers as MarkdownParsers } from 'prettier/plugins/markdown'

export const languages = [
  {
    ...linguistLanguages.Markdown,
    parsers: ['markdown']
  }
]

export const parsers = {
  markdown: {
    ...MarkdownParsers.markdown
  }
}

export const printers = {
  mdast: {
    ...MarkdownPrinter.mdast,
    print: pluginPrint
  }
}

function pluginPrint(path, options, print) {
  const node = path.getValue()

  if (node.type == 'table') {
    return printTable(path, options, print)
  }
  return MarkdownPrinter.mdast.print(path, options, print)
}

function printTable(path, options, print) {
  const contents = path.map(
    () =>
      path.map(() => {
        const text = print().flat(Infinity).join('')
        return { text }
      }, 'children'),
    'children'
  )

  const alignedTable = printTableContents()
  return [alignedTable]

  function printTableContents() {
    /** @type{Doc[]} */
    const parts = [printRow(contents[0]), printAlign()]
    if (contents.length > 1) {
      for (let i = 1; i < contents.length - 1; i++) {
        parts.push(printRow(contents[i]))
      }
      parts.push(printRow(contents[contents.length - 1], true))
    }
    return parts
  }

  function printAlign() {
    const align = contents[0].map(() => {
      return `---`
    })

    return `| ${align.join(' | ')} |\n`
  }

  function printRow(rowContents, end = false) {
    const columns = rowContents.map(({ text }) => {
      return ` ${text} `
    })
    return end ? `|${columns.join('|')}|` : `|${columns.join('|')}|\n`
  }
}
