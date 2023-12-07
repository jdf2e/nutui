declare const addressListData: {
    province: {
        id: number;
        name: string;
        title: string;
    }[];
    city: {
        id: number;
        name: string;
        title: string;
    }[];
    country: {
        id: number;
        name: string;
        title: string;
    }[];
    town: never[];
};
declare const addressExistData: {
    id: number;
    addressDetail: string;
    cityName: string;
    countyName: string;
    provinceName: string;
    selectedAddress: boolean;
    townName: string;
    name: string;
    phone: string;
}[];
export { addressListData, addressExistData };
