export interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  originalPrice: string | null;
  image: string;
  badge: string | null;
}

export const products: Product[] = [
  { id: 1, name: "iPhone 15 Pro Max", brand: "Apple", price: "KES 185,000", originalPrice: "KES 200,000", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80", badge: "New" },
  { id: 2, name: "Samsung Galaxy S24 Ultra", brand: "Samsung", price: "KES 165,000", originalPrice: "KES 180,000", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80", badge: "Popular" },
  { id: 3, name: "Google Pixel 8 Pro", brand: "Google", price: "KES 125,000", originalPrice: null, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80", badge: null },
  { id: 4, name: "Xiaomi 14 Ultra", brand: "Xiaomi", price: "KES 95,000", originalPrice: "KES 110,000", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80", badge: "Sale" },
  { id: 5, name: "iPhone 15 Pro", brand: "Apple", price: "KES 165,000", originalPrice: null, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&q=80", badge: null },
  { id: 6, name: "Samsung Galaxy S23", brand: "Samsung", price: "KES 85,000", originalPrice: "KES 95,000", image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&q=80", badge: "Sale" },
  { id: 7, name: "OnePlus 12", brand: "OnePlus", price: "KES 110,000", originalPrice: null, image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&q=80", badge: "New" },
  { id: 8, name: "Google Pixel 8", brand: "Google", price: "KES 95,000", originalPrice: null, image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=400&q=80", badge: null },
  { id: 9, name: "iPhone 14", brand: "Apple", price: "KES 115,000", originalPrice: "KES 130,000", image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&q=80", badge: "Sale" },
  { id: 10, name: "Samsung Galaxy A54", brand: "Samsung", price: "KES 45,000", originalPrice: null, image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&q=80", badge: "Budget" },
  { id: 11, name: "Xiaomi 13T Pro", brand: "Xiaomi", price: "KES 75,000", originalPrice: "KES 85,000", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&q=80", badge: "Sale" },
  { id: 12, name: "Oppo Find X6 Pro", brand: "Oppo", price: "KES 120,000", originalPrice: null, image: "https://images.unsplash.com/photo-1580910051074-3eb694886f8b?w=400&q=80", badge: null },
  { id: 13, name: "Vivo X100 Pro", brand: "Vivo", price: "KES 115,000", originalPrice: null, image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&q=80", badge: "New" },
  { id: 14, name: "Realme GT 5", brand: "Realme", price: "KES 65,000", originalPrice: "KES 75,000", image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&q=80", badge: "Sale" },
  { id: 15, name: "Tecno Camon 20 Pro", brand: "Tecno", price: "KES 32,000", originalPrice: null, image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&q=80", badge: "Budget" },
  { id: 16, name: "Infinix Note 30 Pro", brand: "Infinix", price: "KES 28,000", originalPrice: "KES 32,000", image: "https://images.unsplash.com/photo-1603898037225-1bea09c550c0?w=400&q=80", badge: "Sale" },
  { id: 17, name: "iPhone 13", brand: "Apple", price: "KES 95,000", originalPrice: null, image: "https://images.unsplash.com/photo-1632633173522-47456de71b76?w=400&q=80", badge: null },
  { id: 18, name: "Samsung Galaxy Z Fold 5", brand: "Samsung", price: "KES 245,000", originalPrice: "KES 265,000", image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=400&q=80", badge: "Premium" },
  { id: 19, name: "Samsung Galaxy Z Flip 5", brand: "Samsung", price: "KES 145,000", originalPrice: null, image: "https://images.unsplash.com/photo-1652976432555-d07866733dc6?w=400&q=80", badge: "Popular" },
  { id: 20, name: "OnePlus Nord 3", brand: "OnePlus", price: "KES 55,000", originalPrice: null, image: "https://images.unsplash.com/photo-1598965402089-897ce52e8355?w=400&q=80", badge: null },
  { id: 21, name: "Google Pixel 7a", brand: "Google", price: "KES 65,000", originalPrice: "KES 72,000", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80", badge: "Sale" },
  { id: 22, name: "Xiaomi Redmi Note 13 Pro", brand: "Xiaomi", price: "KES 35,000", originalPrice: null, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&q=80", badge: "Budget" },
  { id: 23, name: "iPhone SE 2022", brand: "Apple", price: "KES 55,000", originalPrice: "KES 62,000", image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&q=80", badge: "Sale" },
  { id: 24, name: "Samsung Galaxy A34", brand: "Samsung", price: "KES 38,000", originalPrice: null, image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80", badge: null },
  { id: 25, name: "Nothing Phone 2", brand: "Nothing", price: "KES 85,000", originalPrice: null, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80", badge: "New" },
  { id: 26, name: "Motorola Edge 40 Pro", brand: "Motorola", price: "KES 95,000", originalPrice: "KES 105,000", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&q=80", badge: "Sale" },
  { id: 27, name: "Sony Xperia 1 V", brand: "Sony", price: "KES 175,000", originalPrice: null, image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&q=80", badge: "Premium" },
  { id: 28, name: "Asus ROG Phone 7", brand: "Asus", price: "KES 145,000", originalPrice: null, image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&q=80", badge: "Gaming" },
  { id: 29, name: "Huawei P60 Pro", brand: "Huawei", price: "KES 125,000", originalPrice: "KES 140,000", image: "https://images.unsplash.com/photo-1580910051074-3eb694886f8b?w=400&q=80", badge: "Sale" },
  { id: 30, name: "Honor Magic 5 Pro", brand: "Honor", price: "KES 115,000", originalPrice: null, image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&q=80", badge: null },
  { id: 31, name: "Tecno Phantom X2", brand: "Tecno", price: "KES 65,000", originalPrice: "KES 75,000", image: "https://images.unsplash.com/photo-1603898037225-1bea09c550c0?w=400&q=80", badge: "Sale" },
  { id: 32, name: "Infinix Zero 30", brand: "Infinix", price: "KES 42,000", originalPrice: null, image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=400&q=80", badge: null },
  { id: 33, name: "Oppo Reno 10 Pro+", brand: "Oppo", price: "KES 85,000", originalPrice: null, image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&q=80", badge: "New" },
  { id: 34, name: "Vivo V29 Pro", brand: "Vivo", price: "KES 72,000", originalPrice: "KES 82,000", image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&q=80", badge: "Sale" },
  { id: 35, name: "Realme 11 Pro+", brand: "Realme", price: "KES 48,000", originalPrice: null, image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&q=80", badge: null },
  { id: 36, name: "Nokia G42 5G", brand: "Nokia", price: "KES 25,000", originalPrice: null, image: "https://images.unsplash.com/photo-1632633173522-47456de71b76?w=400&q=80", badge: "Budget" },
  { id: 37, name: "iPhone 14 Plus", brand: "Apple", price: "KES 135,000", originalPrice: "KES 145,000", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80", badge: "Sale" },
  { id: 38, name: "Samsung Galaxy S23 FE", brand: "Samsung", price: "KES 78,000", originalPrice: null, image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&q=80", badge: "New" },
  { id: 39, name: "Poco F5 Pro", brand: "Poco", price: "KES 58,000", originalPrice: "KES 65,000", image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=400&q=80", badge: "Sale" },
  { id: 40, name: "OnePlus 11", brand: "OnePlus", price: "KES 98,000", originalPrice: null, image: "https://images.unsplash.com/photo-1652976432555-d07866733dc6?w=400&q=80", badge: "Popular" },
];
