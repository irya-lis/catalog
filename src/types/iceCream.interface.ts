export interface IIceCream {
    id: number
    name: string
    price: string
    image: string


}

export interface IIceCreamData extends Omit<IIceCream, 'id'> {}