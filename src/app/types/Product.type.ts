export default interface Product {
  id?: number | string;
  name: string;
  price: number;
  discount_percentage: number;
  number_of_installments: number;
  product_picture: string;
  color: string;
  size: string;
  free_shipping: boolean;
  brand_product_id: number;
  gender_product_id: number;
  category_product_id: number;
  quantity_available?: number;
}

export interface ShoppingCartItem {
  id: number | string;
  product_id: number;
  quantity: number;
}
