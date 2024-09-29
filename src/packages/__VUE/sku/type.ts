export interface SkuInfo {
  name: string
  id: number
  active: boolean
  disable: boolean
  // @ts-ignore
  [props: string]: any
}
