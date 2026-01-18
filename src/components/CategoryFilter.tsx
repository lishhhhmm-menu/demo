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
                <span className="category-icon">✨</span>
                <span className="category-name">{t.all}</span>
            </button>
            {categories.map((category) => (
                <button
                    key={category.id}
                    className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => onCategoryChange(category.id)}
                >
                    <span className="category-icon">{category.icon}</span>
                    <span className="category-name">{t.categories[category.id as keyof typeof t.categories]}</span>
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
