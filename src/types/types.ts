export interface IAdvantage {
    id: number;
    title: string;
    description: string;
    img: string;
};

export interface IProductInfo {
    id: number;
    value: string;
};

export interface IProduct {
    id: number;
    img: string;
    title: string;
    infoTitle: string;
    infoList: IProductInfo[];
    price: string;
};