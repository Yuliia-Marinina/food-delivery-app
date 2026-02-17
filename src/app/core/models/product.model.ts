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
  discount?: number;
  originalPrice?: number;
  prepTime?: number;
  freeDelivery?: boolean;
  isFavorite?: boolean;
  isLiked?: boolean;
  images?: string[];
  sizes?: ProductSize[];
  extras?: ProductExtra[];
  reviews?: Review[];
}

export interface ProductSize {
  id: string;
  name: string;
  price: number;
}

export interface ProductExtra {
  id: string;
  name: string;
  price: number;
  selected?: boolean;
}

export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  text: string;
  isVerified?: boolean;
  image?: string;
}
