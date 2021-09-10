export type ProductsResponse = {
    content: Product[];
    totalPages: number;
}

export type Product = {
    id: number;
    name: string;
    price: number;
    categories: Category[];
    promotionalPrice: number;
    paymentTerms: string;
    sizes: string;
    imageURL: string;
    description: string;
}

export type Category = {
    id: number;
    name: string;
}
