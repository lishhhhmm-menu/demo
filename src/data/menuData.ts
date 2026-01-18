import { MenuItem, Category } from '../types';

export const categories: Category[] = [
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'mains', name: 'Main Courses', icon: '🍽️' },
    { id: 'pasta', name: 'Pasta', icon: '🍝' },
    { id: 'seafood', name: 'Seafood', icon: '🦞' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🍹' },
];

export const menuItems: MenuItem[] = [
    // Appetizers
    {
        id: 'app-1',
        name: 'bruschetta-trio',
        description: 'bruschetta-trio-desc',
        price: 12.50,
        category: 'appetizers',
        dietary: ['vegetarian'],
    },
    {
        id: 'app-2',
        name: 'calamari-fritti',
        description: 'calamari-fritti-desc',
        price: 14.00,
        category: 'appetizers',
    },
    {
        id: 'app-3',
        name: 'caprese-salad',
        description: 'caprese-salad-desc',
        price: 11.00,
        category: 'appetizers',
        dietary: ['vegetarian', 'gluten-free'],
    },
    {
        id: 'app-4',
        name: 'crispy-cauliflower',
        description: 'crispy-cauliflower-desc',
        price: 10.50,
        category: 'appetizers',
        dietary: ['vegetarian'],
        spicyLevel: 2,
    },

    // Main Courses
    {
        id: 'main-1',
        name: 'grilled-ribeye',
        description: 'grilled-ribeye-desc',
        price: 38.00,
        category: 'mains',
    },
    {
        id: 'main-2',
        name: 'lamb-chops',
        description: 'lamb-chops-desc',
        price: 34.00,
        category: 'mains',
    },
    {
        id: 'main-3',
        name: 'pan-seared-chicken',
        description: 'pan-seared-chicken-desc',
        price: 24.00,
        category: 'mains',
        dietary: ['gluten-free'],
    },
    {
        id: 'main-4',
        name: 'vegetable-wellington',
        description: 'vegetable-wellington-desc',
        price: 22.00,
        category: 'mains',
        dietary: ['vegetarian'],
    },

    // Pasta
    {
        id: 'pasta-1',
        name: 'lobster-ravioli',
        description: 'lobster-ravioli-desc',
        price: 28.00,
        category: 'pasta',
    },
    {
        id: 'pasta-2',
        name: 'spaghetti-carbonara',
        description: 'spaghetti-carbonara-desc',
        price: 19.00,
        category: 'pasta',
    },
    {
        id: 'pasta-3',
        name: 'penne-arrabbiata',
        description: 'penne-arrabbiata-desc',
        price: 16.00,
        category: 'pasta',
        dietary: ['vegetarian'],
        spicyLevel: 3,
    },
    {
        id: 'pasta-4',
        name: 'mushroom-truffle-fettuccine',
        description: 'mushroom-truffle-fettuccine-desc',
        price: 23.00,
        category: 'pasta',
        dietary: ['vegetarian'],
    },

    // Seafood
    {
        id: 'sea-1',
        name: 'chilean-sea-bass',
        description: 'chilean-sea-bass-desc',
        price: 36.00,
        category: 'seafood',
    },
    {
        id: 'sea-2',
        name: 'jumbo-shrimp-scampi',
        description: 'jumbo-shrimp-scampi-desc',
        price: 26.00,
        category: 'seafood',
    },
    {
        id: 'sea-3',
        name: 'grilled-salmon',
        description: 'grilled-salmon-desc',
        price: 27.00,
        category: 'seafood',
        dietary: ['gluten-free'],
    },
    {
        id: 'sea-4',
        name: 'seafood-paella',
        description: 'seafood-paella-desc',
        price: 32.00,
        category: 'seafood',
        spicyLevel: 1,
    },

    // Desserts
    {
        id: 'dess-1',
        name: 'tiramisu',
        description: 'tiramisu-desc',
        price: 9.00,
        category: 'desserts',
    },
    {
        id: 'dess-2',
        name: 'chocolate-lava-cake',
        description: 'chocolate-lava-cake-desc',
        price: 10.00,
        category: 'desserts',
    },
    {
        id: 'dess-3',
        name: 'panna-cotta',
        description: 'panna-cotta-desc',
        price: 8.50,
        category: 'desserts',
        dietary: ['gluten-free'],
    },
    {
        id: 'dess-4',
        name: 'lemon-tart',
        description: 'lemon-tart-desc',
        price: 9.50,
        category: 'desserts',
    },

    // Beverages
    {
        id: 'bev-1',
        name: 'fresh-lemonade',
        description: 'fresh-lemonade-desc',
        price: 5.00,
        category: 'beverages',
    },
    {
        id: 'bev-2',
        name: 'italian-soda',
        description: 'italian-soda-desc',
        price: 4.50,
        category: 'beverages',
    },
    {
        id: 'bev-3',
        name: 'iced-tea',
        description: 'iced-tea-desc',
        price: 3.50,
        category: 'beverages',
    },
    {
        id: 'bev-4',
        name: 'espresso',
        description: 'espresso-desc',
        price: 4.00,
        category: 'beverages',
    },
    {
        id: 'bev-5',
        name: 'cappuccino',
        description: 'cappuccino-desc',
        price: 5.50,
        category: 'beverages',
    },
];
