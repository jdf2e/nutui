export type CategoryType = 'classify' | 'text' | 'custom';
export type CategoryNavItem = {
  catName?: string;
  catId?: string;
  // custom
  [key: PropertyKey]: any;
};

export type CategoryOptionKey = {
  catName?: string;
  catId?: string;
};
