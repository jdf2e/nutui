import Cell from './cell.taro.vue';
import type { ComponentPublicInstance } from 'vue';
export type { CellProps } from './cell.taro.vue';
export type { CellSize } from './types';
export type CellInstance = ComponentPublicInstance & InstanceType<typeof Cell>;
export { Cell, Cell as default };
