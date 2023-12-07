
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< (props: Record<string, any> & {}) => any>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutCheckbox: typeof _default;
  }
}