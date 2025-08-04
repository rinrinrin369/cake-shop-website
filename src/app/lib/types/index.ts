// 商品の型定義
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'regular' | 'seasonal' | 'baked-goods';
  images: string[];
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

// ニュースの型定義
export interface News {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  category: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

// ショップ情報の型定義
export interface ShopInfo {
  id: string;
  name: string;
  address: string;
  hours: string;
  phone: string;
  philosophy: string;
  createdAt: string;
  updatedAt: string;
}

// パティシエ情報の型定義
export interface Chef {
  id: string;
  name: string;
  age: number;
  bio: string;
  awards: string[];
  image: string;
  createdAt: string;
  updatedAt: string;
}