export interface AuthState {
  isLoggedIn: boolean;
  vendorName: string | null;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  vendor: string;
  image?: string;
  quantity?: number;
}

export interface DashboardProps {
  productToEdit?: {
    id: number;
    name: string;
    price: number;
    vendor: string;
    image: string;
  };
}
