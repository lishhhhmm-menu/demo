import React, { useEffect, useRef } from 'react';
import { Category, Translations } from '../types';
import './CategoryFilter.css';

interface CategoryFilterProps {
    categories: Category[];
    categoryVisibility: Record<string, number>;
    t: Translations;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
    categories,
    categoryVisibility,
    t
}) => {
    const navRef = useRef<HTMLDivElement>(null);

    const scrollToCategory = (categoryId: string) => {
        const element = document.getElementById(`category-${categoryId}`);
        if (element) {
            const offset = 80; // Account for sticky nav height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Auto-scroll navigation to show most visible category button
    useEffect(() => {
        if (navRef.current) {
            // Find category with highest visibility
            let maxVisibility = 0;
            let maxCategory = '';
            Object.entries(categoryVisibility).forEach(([id, visibility]) => {
                if (visibility > maxVisibility) {
                    maxVisibility = visibility;
                    maxCategory = id;
                }
            });

            if (maxCategory) {
                const activeButton = navRef.current.querySelector(`[data-category="${maxCategory}"]`) as HTMLElement;
                if (activeButton) {
                    const navContainer = navRef.current;
                    const buttonLeft = activeButton.offsetLeft;
                    const buttonWidth = activeButton.offsetWidth;
                    const navWidth = navContainer.offsetWidth;

                    // Calculate target scroll position to center the button
                    const targetScroll = buttonLeft - (navWidth / 2) + (buttonWidth / 2);

                    navContainer.scrollTo({
                        left: targetScroll,
                        behavior: 'smooth'
                    });
                }
            }
        }
    }, [categoryVisibility]);

    return (
        <div className="category-filter" ref={navRef}>
            {categories.map((category) => {
                const visibility = categoryVisibility[category.id] || 0;

                return (
                    <button
                        key={category.id}
                        data-category={category.id}
                        className="category-btn"
                        style={{
                            backgroundColor: `rgba(var(--accent-primary-rgb), ${visibility})`,
                            color: visibility > 0.5 ? 'white' : 'var(--text-secondary)'
                        }}
                        onClick={() => scrollToCategory(category.id)}
                    >
                        {t.categories[category.id as keyof typeof t.categories]}
                    </button>
                );
            })}
        </div>
    );
};

export default CategoryFilter;
