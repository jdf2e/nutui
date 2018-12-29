import Vue  from 'vue';
export interface InstallationOptions {
    locale?: any
    lang?: any
}

export const version: string

export const locale: (l:any) => void

export function install (vue: typeof Vue, options: InstallationOptions): void