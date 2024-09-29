export interface SkuInfo {
  name: string
  id: number
  active: boolean
  disable: boolean
  // @ts-expect-error： need any here
  [props: string]: any
}
