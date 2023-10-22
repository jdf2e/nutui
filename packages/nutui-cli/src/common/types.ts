export type Type = 'h5' | 'taro' | 'docs';
export type Target = 'nutui' | 'nutui-taro' | 'taro';
export type NavPackages = {
  name: string;
  cName: string;
  eName?: string;
  show: boolean;
  path?: string;
  isLink?: boolean;
  exclude?: boolean;
  exportEmpty?: boolean;
  taro?: boolean;
  type?: string;
  tarodoc?: boolean;
  desc?: string;
};

export type NavItem = {
  name: string;
  enName?: string;
  packages: NavPackages[];
};

export type DocsPackages = {
  version: string;
  name: string;
  taro: boolean;
  sort: number;
  cName: string;
  eName: string;
  type: string;
  show: boolean;
  desc: string;
  author: string;
  exportEmpty?: boolean;
  exclude?: boolean;
};

export type DocsItem = {
  name: string;
  eName: string;
  packages: DocsPackages[];
};

export type ConfigJson = {
  version?: string;
  demoUrl?: string;
  nav: NavItem[];
  docs: DocsItem[];
};
export type ThemesEnumKey = 'jdt' | 'jdb' | 'jddkh';
export type ThemesEnum = {
  [key in ThemesEnumKey]: string;
};
