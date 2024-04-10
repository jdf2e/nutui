import Cell from './cell.vue';
import type { ComponentPublicInstance } from 'vue';
export type { CellProps } from './cell.vue';
export type { CellSize } from './types';
export type CellInstance = ComponentPublicInstance & InstanceType<typeof Cell>;
export { Cell, Cell as default };
