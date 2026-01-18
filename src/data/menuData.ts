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
        name: 'Bruschetta Trio',
        description: 'Three varieties: classic tomato basil, mushroom truffle, and roasted pepper',
        price: 12.50,
        category: 'appetizers',
        dietary: ['vegetarian'],
        isPopular: true,
    },
    {
        id: 'app-2',
        name: 'Calamari Fritti',
        description: 'Crispy fried calamari with lemon aioli and marinara sauce',
        price: 14.00,
        category: 'appetizers',
    },
    {
        id: 'app-3',
        name: 'Caprese Salad',
        description: 'Fresh mozzarella, heirloom tomatoes, basil, balsamic reduction',
        price: 11.00,
        category: 'appetizers',
        dietary: ['vegetarian', 'gluten-free'],
    },
    {
        id: 'app-4',
        name: 'Crispy Cauliflower',
        description: 'Buffalo-spiced cauliflower with blue cheese dip',
        price: 10.50,
        category: 'appetizers',
        dietary: ['vegetarian'],
        spicyLevel: 2,
    },

    // Main Courses
    {
        id: 'main-1',
        name: 'Grilled Ribeye Steak',
        description: '12oz ribeye with garlic butter, roasted vegetables, and truffle mashed potatoes',
        price: 38.00,
        category: 'mains',
        isPopular: true,
    },
    {
        id: 'main-2',
        name: 'Herb-Crusted Lamb Chops',
        description: 'Three lamb chops with rosemary jus, asparagus, and fingerling potatoes',
        price: 34.00,
        category: 'mains',
    },
    {
        id: 'main-3',
        name: 'Pan-Seared Chicken',
        description: 'Chicken breast with lemon caper sauce, seasonal vegetables',
        price: 24.00,
        category: 'mains',
        dietary: ['gluten-free'],
    },
    {
        id: 'main-4',
        name: 'Vegetable Wellington',
        description: 'Roasted vegetables and mushrooms in puff pastry with red wine reduction',
        price: 22.00,
        category: 'mains',
        dietary: ['vegetarian'],
    },

    // Pasta
    {
        id: 'pasta-1',
        name: 'Lobster Ravioli',
        description: 'House-made ravioli with lobster filling in creamy tomato vodka sauce',
        price: 28.00,
        category: 'pasta',
        isPopular: true,
    },
    {
        id: 'pasta-2',
        name: 'Spaghetti Carbonara',
        description: 'Classic Roman carbonara with guanciale, eggs, pecorino, black pepper',
        price: 19.00,
        category: 'pasta',
    },
    {
        id: 'pasta-3',
        name: 'Penne Arrabbiata',
        description: 'Spicy tomato sauce with garlic and fresh basil',
        price: 16.00,
        category: 'pasta',
        dietary: ['vegetarian'],
        spicyLevel: 3,
    },
    {
        id: 'pasta-4',
        name: 'Mushroom Truffle Fettuccine',
        description: 'Fresh fettuccine with wild mushrooms, cream, and truffle oil',
        price: 23.00,
        category: 'pasta',
        dietary: ['vegetarian'],
    },

    // Seafood
    {
        id: 'sea-1',
        name: 'Chilean Sea Bass',
        description: 'Miso-glazed sea bass with bok choy and jasmine rice',
        price: 36.00,
        category: 'seafood',
        isPopular: true,
    },
    {
        id: 'sea-2',
        name: 'Jumbo Shrimp Scampi',
        description: 'Garlic butter white wine sauce, linguine, lemon',
        price: 26.00,
        category: 'seafood',
    },
    {
        id: 'sea-3',
        name: 'Grilled Salmon',
        description: 'Atlantic salmon with dill sauce, roasted vegetables',
        price: 27.00,
        category: 'seafood',
        dietary: ['gluten-free'],
    },
    {
        id: 'sea-4',
        name: 'Seafood Paella',
        description: 'Saffron rice with mussels, clams, shrimp, and chorizo',
        price: 32.00,
        category: 'seafood',
        spicyLevel: 1,
    },

    // Desserts
    {
        id: 'dess-1',
        name: 'Tiramisu',
        description: 'Classic Italian dessert with espresso-soaked ladyfingers and mascarpone',
        price: 9.00,
        category: 'desserts',
        isPopular: true,
    },
    {
        id: 'dess-2',
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center, vanilla ice cream',
        price: 10.00,
        category: 'desserts',
    },
    {
        id: 'dess-3',
        name: 'Panna Cotta',
        description: 'Vanilla panna cotta with mixed berry compote',
        price: 8.50,
        category: 'desserts',
        dietary: ['gluten-free'],
    },
    {
        id: 'dess-4',
        name: 'Lemon Tart',
        description: 'Tangy lemon curd in buttery pastry with raspberry coulis',
        price: 9.50,
        category: 'desserts',
    },

    // Beverages
    {
        id: 'bev-1',
        name: 'Fresh Squeezed Lemonade',
        description: 'House-made with organic lemons and mint',
        price: 5.00,
        category: 'beverages',
    },
    {
        id: 'bev-2',
        name: 'Italian Soda',
        description: 'Choice of flavor: raspberry, peach, or vanilla',
        price: 4.50,
        category: 'beverages',
    },
    {
        id: 'bev-3',
        name: 'Iced Tea (Sweet or Unsweet)',
        description: 'Fresh brewed daily',
        price: 3.50,
        category: 'beverages',
    },
    {
        id: 'bev-4',
        name: 'Espresso',
        description: 'Double shot of premium Italian espresso',
        price: 4.00,
        category: 'beverages',
    },
    {
        id: 'bev-5',
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and foam',
        price: 5.50,
        category: 'beverages',
    },
];
