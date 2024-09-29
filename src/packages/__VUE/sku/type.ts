export interface SkuInfoBase {
  name: string
  id: number
  active: boolean
  disable: boolean
}
export type SkuInfo<T = unknown> = SkuInfoBase & Record<string, T>
