export enum CustomerType{
    REGULAR,
    GOLD = "null",
    PLATINUM = 1
}

export type Customer = {
    id: number;
    name: string;
    type: CustomerType;
}