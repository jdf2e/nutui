import createBEM from './bem'
export default function createNameSpace(name: string) {
  const prefixedName = `nutui-${name}`
  return [prefixedName, createBEM(prefixedName)]
}
