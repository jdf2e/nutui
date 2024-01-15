import type { App, Component } from 'vue';
export type WithInstall<T> = T & {
    install(app: App): void;
};
export declare const withInstall: <T extends Component>(comp: T) => WithInstall<T>;
