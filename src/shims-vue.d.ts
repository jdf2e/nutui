/// <reference types="vite/client" />
interface FrameRequestCallback {
  (time: number): void;
}
declare interface Window {
  webkitCancelAnimationFrame(handle: number): void;
  webkitRequestAnimationFrame(callback: FrameRequestCallback): number;
}
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.md' {
  import type { ComponentOptions } from 'vue';
  const Component: ComponentOptions;
  export default Component;
}
