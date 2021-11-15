const config = require('../src/config.json')
const path = require('path')
const fs = require('fs-extra')
let fileStr = `@import '../variables.scss';\n`
let tasks = []
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let folderName = element.name.toLowerCase()
    tasks.push(
      fs
        .copy(
          path.resolve(__dirname, `../src/packages/${folderName}/${folderName}.scss`),
          path.resolve(__dirname, `../dist/packages/${folderName}/index.scss`)
        )
        .then((success) => {
          fileStr += `@import '../../packages/${folderName}/index.scss';\n`
        })
        .catch((error) => {})
    )
  })
})

tasks.push(
  fs.copy(path.resolve(__dirname, '../src/styles'), path.resolve(__dirname, '../dist/styles'))
)

Promise.all(tasks).then((res) => {
  fs.outputFile(
    path.resolve(__dirname, '../dist/styles/themes/default.scss'),
    fileStr,
    'utf8',
    (error) => {
      // logger.success(`文件写入成功`);
    }
  )
})
