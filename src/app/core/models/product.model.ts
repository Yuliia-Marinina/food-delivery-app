export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  restaurant?: string;
  description?: string;
  badge?: string;
  reviewsCount?: number;
}
