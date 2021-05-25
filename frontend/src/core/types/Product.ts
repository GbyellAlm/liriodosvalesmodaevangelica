export type ProductsResponse = {
    content: Product[];
    totalPages: number;
}

export type Product = {
    id: number;
    images: Image[];
    name: string;
    price: number;
    promotionalPrice: number;
    paymentTerms: string;
    sizes: string;
    description: string;
    categories: Category[];
    promotion: boolean;
}

export type Image = {
    id: number;
    mainImage: boolean;
    productId: number;
    url: string;  
}

export type Category = {
    id: number;
    name: string;
}
