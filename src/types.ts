export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    dietary?: string[];
    spicyLevel?: number;
    isPopular?: boolean;
}

export interface OrderItem {
    menuItem: MenuItem;
    quantity: number;
}

export type Category = {
    id: string;
    name: string;
    icon: string;
};
