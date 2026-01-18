import React from 'react';
import { Category, Translations } from '../types';
import './CategoryFilter.css';

interface CategoryFilterProps {
    categories: Category[];
    activeCategory: string | null;
    onCategoryChange: (categoryId: string | null) => void;
    t: Translations;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
    categories,
    activeCategory,
    onCategoryChange,
    t
}) => {
    return (
        <div className="category-filter">
            <button
                className={`category-btn ${activeCategory === null ? 'active' : ''}`}
                onClick={() => onCategoryChange(null)}
            >
                {t.all}
            </button>
            {categories.map((category) => (
                <button
                    key={category.id}
                    className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => onCategoryChange(category.id)}
                >
                    {t.categories[category.id as keyof typeof t.categories]}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
