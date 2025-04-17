export interface ProductDetailsType {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  quantity?: number;
  sizes?: string[];
  colors?: string[];
  rating?: number;
  reviews?: number;
  inStock?: boolean;
  featured?: boolean;
  discount?: number;
}
