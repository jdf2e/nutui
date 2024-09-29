export interface SkuInfo {
  name: string
  id: number
  active: boolean
  disable: boolean
  // @ts-expect-error
  [props: string]: any
}
