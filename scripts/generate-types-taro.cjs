const config = require('../src/config.json')
const path = require('path')
const fs = require('fs')

const sourceDir = path.resolve(__dirname, './../tsc/type/src/packages') // 拷贝的源文件夹

const toDir = path.resolve(__dirname, './../dist/types') // ./../dist

const basePath = path.join(toDir, '__VUE')

const fileList = []

let packages = []

const preContent = `
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};\n`
const start = 'declare const _default:'
const end = ';\nexport default _default;\n'
const regex = new RegExp(`${start}([\\s\\S]*?)${end}`)

const getCompList = (basePath) => {
  const files = fs.readdirSync(basePath)
  files.forEach((filename) => {
    const filedir = path.join(basePath, filename)
    //根据文件路径获取文件信息，返回一个fs.Stats对象
    const stats = fs.statSync(filedir)
    const isFile = stats.isFile() //是文件
    const isDir = stats.isDirectory() //是文件夹
    if (isFile) {
      fileList.push(filedir)
    }
    if (isDir) {
      getCompList(filedir) //递归，如果是文件夹，就继续遍历该文件夹下面的文件
    }
  })
}

const getCompName = (name) => {
  if (!packages.length) {
    config.nav.forEach((item, index) => {
      packages = packages.concat(item.packages)
    })
  }
  const packageName = packages.find((item) => item.name.toLowerCase() === name.toLowerCase())
  if (packageName) {
    if (packageName?.setup === true) {
      return [packageName.name, true]
    }
    return [packageName.name, false]
  }
  return ''
}

const getLocale = () => {
  const source = path.join(sourceDir, 'locale')
  const to = path.resolve(__dirname, './../dist/packages/locale')
  fs.cp(source, to, { recursive: true }, (err) => {
    if (err) {
      console.error(err)
      return
    }
  })
}

const getResolver = () => {
  const source = path.join(sourceDir, 'resolver')
  const to = path.resolve(__dirname, './../dist/resolver')
  fs.cp(source, to, { recursive: true }, (err) => {
    if (err) {
      console.error(err)
      return
    }
  })
  const pkgJsonSource = path.resolve(__dirname, './../src/packages/resolver/package.json')
  const pkgJsonTo = path.resolve(__dirname, './../dist/resolver/package.json')
  fs.cp(pkgJsonSource, pkgJsonTo, (err) => {
    if (err) {
      console.error(err)
      return
    }
  })
}

fs.cp(sourceDir, toDir, { recursive: true }, (err) => {
  if (err) {
    console.error(err)
    return
  }

  const oldName = path.join(toDir, 'taro.build.d.ts')
  const newName = path.join(toDir, 'index.d.ts')

  fs.rename(oldName, newName, (err) => {
    if (err) {
      console.error(err)
    }
  })

  getCompList(basePath)

  fileList.forEach((item, index) => {
    const content = fs.readFileSync(item).toLocaleString()
    const inputs = content.match(regex)

    if (inputs && inputs.length) {
      let name = item.substring(0, item.lastIndexOf('/'))
      name = name.substring(name.lastIndexOf('/') + 1)
      const _ComponentName = getCompName(name)
      if (_ComponentName) {
        const [componentName, setup] = _ComponentName
        let remain = `
declare module 'vue' {
    interface GlobalComponents {
        Nut${componentName}: typeof _default;
    }
}`
        if (setup) {
          let changeContent = content.replace(
            'export default _default;',
            `declare const _nut_default: WithInstall<typeof _default>;\nexport default _nut_default;\n${remain}`
          )
          changeContent = `import type { WithInstall } from '../../utils';\n` + changeContent
          fs.writeFileSync(item, changeContent)
        } else {
          let changeContent = content.replace(regex, `${preContent}${start} Install<${inputs[1]}>${end}${remain}`)
          fs.writeFileSync(item, changeContent)
        }
      }
    }
  })

  //国际化处理
  getLocale()

  // resolver 类型文件
  getResolver()
})
