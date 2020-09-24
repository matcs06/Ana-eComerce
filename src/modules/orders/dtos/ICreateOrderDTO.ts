interface IProduct {
  product_id: string;
  price: number;
  quantity: number;
}

export default interface ICreateOrderDTO {
  customer_name: string;
  customer_address: string;
  payment_method: string;
  phone: string;
  products: IProduct[];
}
