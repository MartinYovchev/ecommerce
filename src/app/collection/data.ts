import { Category, Brand, InfoCard } from './types';

export const categories: Category[] = [
  {
    id: 'men',
    name: "Men's Shoes",
    description:
      "Discover our collection of men's sneakers for style and performance.",
    image: '/collection/men-shoes.jpg',
    link: '/v2/products/men-shoes',
    featured: true,
  },
  {
    id: 'women',
    name: "Women's Shoes",
    description: "Explore our women's sneakers combining fashion and function.",
    image: '/collection/women-shoes.jpg',
    link: '/v2/products/women-shoes',
    featured: true,
  },
  {
    id: 'kids',
    name: "Kids' Shoes",
    description: 'Fun and durable sneakers designed for active kids.',
    image: '/collection/kid-shoes.jpg',
    link: '/v2/products/kid-shoes',
    featured: true,
  },
  {
    id: 'running',
    name: 'Running',
    description: 'High-performance running shoes for all terrains.',
    image: '/collection/running-shoes.jpg',
    link: '/v2/products/running-shoes',
    featured: false,
  },
  {
    id: 'basketball',
    name: 'Basketball',
    description: 'Court-ready basketball shoes for optimal performance.',
    image: '/collection/basketball-shoes.jpg',
    link: '/v2/products/basketball-shoes',
    featured: false,
  },
  {
    id: 'casual',
    name: 'Casual',
    description: 'Everyday casual sneakers for comfort and style.',
    image: '/collection/casual-shoes.jpg',
    link: '/v2/products/casual-shoes',
    featured: false,
  },
  {
    id: 'limited',
    name: 'Limited Edition',
    description: 'Exclusive, limited-run sneakers for collectors.',
    image: '/collection/limited-shoes.jpg',
    link: '/v2/products/limited-edition',
    featured: false,
  },
  {
    id: 'sale',
    name: 'On Sale',
    description: 'Premium sneakers at discounted prices.',
    image: '/collection/sale-shoes.jpg',
    link: '/v2/products/sale',
    featured: false,
  },
];

export const brands: Brand[] = [
  { id: 'nike', name: 'Nike', logo: '/brands/nike.png' },
  { id: 'adidas', name: 'Adidas', logo: '/brands/adidas.png' },
  { id: 'newbalance', name: 'New Balance', logo: '/brands/newbalance.png' },
  { id: 'puma', name: 'Puma', logo: '/brands/puma.png' },
  { id: 'reebok', name: 'Reebok', logo: '/brands/reebok.png' },
  { id: 'converse', name: 'Converse', logo: '/brands/converse.png' },
];

export const infoCards: InfoCard[] = [
  {
    icon: '/icons/shipping.svg',
    title: 'Free Shipping',
    description: 'On all orders over $150',
  },
  {
    icon: '/icons/return.svg',
    title: 'Easy Returns',
    description: '30-day return policy',
  },
  {
    icon: '/icons/secure.svg',
    title: 'Secure Payment',
    description: 'Your data is protected',
  },
  {
    icon: '/icons/support.svg',
    title: 'Customer Support',
    description: '24/7 dedicated support',
  },
];
