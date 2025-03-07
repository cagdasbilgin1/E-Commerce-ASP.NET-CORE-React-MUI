export interface IProduct {
    id: number,
    name: string,
    description?: string,
    price: number,
    isActive: boolean,
    imageURL?: string,
    stock?: number
}