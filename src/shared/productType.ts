export interface productType {
  id: string;
  productName: string;
  imgUrl: string;
  category?: string;
  type?: string;
  price: number;
  shortDesc?: string;
  description?: string;
  reviews?: reviews[];
  avgRating?: number;
}

export interface reviews {
  rating: number;
  text: string;
}

export interface cartSliceProductType {
  id: string;
  productName: string;
  price: number;
  image: string;
  quantity: number;
  totalPrice: number;
}

export interface cartInitialState {
  items: cartSliceProductType[];
  totalAmount: number;
  totalQuantity: number;
}
