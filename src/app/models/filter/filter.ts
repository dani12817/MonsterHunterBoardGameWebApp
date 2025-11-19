export interface MaterialFilter {
  option: FilterOption;
  value: any;
  string: string;
}

export interface FilterOption {
  type: string;
  label: string;
  width: string;
}

export interface CategoryItem {
  checked: boolean,
  label: string,
  key: string
}