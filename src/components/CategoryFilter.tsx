import React from 'react';
import { Category } from '../types';
import './CategoryFilter.css';

interface CategoryFilterProps {
    categories: Category[];
    activeCategory: string | null;
    onCategoryChange: (categoryId: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
    categories,
    activeCategory,
    onCategoryChange
}) => {
    return (
        <div className="category-filter">
            <button
                className={`category-btn ${activeCategory === null ? 'active' : ''}`}
                onClick={() => onCategoryChange(null)}
            >
                <span className="category-icon">✨</span>
                <span className="category-name">All</span>
            </button>
            {categories.map((category) => (
                <button
                    key={category.id}
                    className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => onCategoryChange(category.id)}
                >
                    <span className="category-icon">{category.icon}</span>
                    <span className="category-name">{category.name}</span>
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
