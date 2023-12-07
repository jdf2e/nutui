export interface AddressData {
    [key: string]: any;
    name: string;
    id: string | number;
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
