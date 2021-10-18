const package = require('../package.json')
const config = require('../src/config.json')
const path = require('path')
const fs = require('fs-extra')
let importStr = ``
const packages = []
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, show, type } = element
    if (show) {
      importStr += `import ${name} from './${name.toLowerCase()}';\n`
      packages.push(name)
    }
  })
})

let fileStr = `${importStr}
export { ${packages.join(',')} };`

fs.outputFile(
  path.resolve(__dirname, '../src/packages/nutui.react.ts'),
  fileStr,
  'utf8',
  (error) => {
    if (error) throw error
  }
)
