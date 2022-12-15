export interface RegionData {
  name: string;
  [key: string]: any;
}

export interface CustomRegionData {
  title: string;
  list: any[];
}

export interface existRegionData {
  id?: string | number;
  provinceName: string;
  cityName: string;
  countyName: string;
  townName: string;
  addressDetail: string;
  selectedAddress: boolean;
  [key: string]: any;
}
