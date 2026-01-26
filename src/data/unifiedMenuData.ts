
import itemsData from './items.json';
import categoriesData from './categories.json';

export interface ItemTranslation {
    name: string;
    description: string;
}

export interface UnifiedItem {
    id: string;
    price: number;
    category: string;
    dietary?: string[];
    spicyLevel?: number;
    image?: string;
    translations: {
        en: ItemTranslation;
        el: ItemTranslation;
        it: ItemTranslation;
    };
}

export interface CategoryTranslation {
    name: string;
    description?: string; // Optional if description is not always present
}

export interface UnifiedCategory {
    id: string;
    icon: string;
    translations: {
        en: CategoryTranslation;
        el: CategoryTranslation;
        it: CategoryTranslation;
    };
}

export const unifiedMenuItems: UnifiedItem[] = itemsData as UnifiedItem[];
export const unifiedCategories: UnifiedCategory[] = categoriesData as UnifiedCategory[];
