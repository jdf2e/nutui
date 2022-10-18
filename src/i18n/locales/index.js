const locales = import.meta.globEager('./*/index.js')

const exported = {}
Object.keys(locales).forEach((key) => {
  exported[key.match(/\/([\w-]+)\//)[1]] = locales[key].default
})

export default exported
