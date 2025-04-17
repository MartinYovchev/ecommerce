export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
  featured: boolean;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface InfoCard {
  icon: string;
  title: string;
  description: string;
}
