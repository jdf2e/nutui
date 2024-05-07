import Image from './image.vue';
import type { ComponentPublicInstance } from 'vue';
export type { ImageProps } from './image.vue';
export type { ImageFit, ImagePosition } from './types';
export type ImageInstance = ComponentPublicInstance & InstanceType<typeof Image>;
export { Image, Image as default };
