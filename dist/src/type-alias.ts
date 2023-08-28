export type Category = {
    id: string;
    name: String;
    desc?: string; //optional bebas disis atau tidak dengan cara cukup menambahkan tanda tanya 
}

export type Product = {
    id: string;
    name: string;
    price: number;
    category: Category;
}