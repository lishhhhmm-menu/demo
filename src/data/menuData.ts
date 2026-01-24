import { MenuItem, Category } from '../types';
import { unifiedMenuItems, unifiedCategories } from './unifiedMenuData';

export const categories: Category[] = unifiedCategories.map(cat => ({
    id: cat.id,
    name: cat.translations['en'].name, // Default name, displayed if translation fails or for internal use
    icon: cat.icon
}));

export const menuItems: MenuItem[] = unifiedMenuItems.map(item => ({
    id: item.id,
    name: item.id,
    description: `${item.id}-desc`,
    price: item.price,
    category: item.category,
    dietary: item.dietary,
    spicyLevel: item.spicyLevel,
}));
