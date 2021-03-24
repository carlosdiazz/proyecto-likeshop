export interface ProductModelSever {
    id: number;
    name: string;
    category: string;
    description: string;
    price: number;
    quantity: number;
    images: string;
}

export interface ServerResponse{
  count: number;
  products: ProductModelSever[];
}
