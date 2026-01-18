import React from 'react';
import { MenuItem } from '../types';
import './MenuItemCard.css';

interface MenuItemCardProps {
    item: MenuItem;
    isInOrder: boolean;
    onToggle: (item: MenuItem) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, isInOrder, onToggle }) => {
    const renderSpicyLevel = () => {
        if (!item.spicyLevel) return null;
        return (
            <span className="spicy-indicator" title={`Spicy Level ${item.spicyLevel}/3`}>
                {'🌶️'.repeat(item.spicyLevel)}
            </span>
        );
    };

    const renderDietary = () => {
        if (!item.dietary || item.dietary.length === 0) return null;
        return (
            <div className="dietary-tags">
                {item.dietary.map((tag) => (
                    <span key={tag} className="dietary-tag">
                        {tag}
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div className={`menu-card ${isInOrder ? 'in-order' : ''} animate-fadeIn`}>
            {item.isPopular && (
                <div className="popular-badge">
                    <span>⭐</span> Popular
                </div>
            )}

            <div className="menu-card-content">
                <div className="menu-card-header">
                    <h3 className="menu-item-name">{item.name}</h3>
                    <span className="menu-item-price">${item.price.toFixed(2)}</span>
                </div>

                <p className="menu-item-description">{item.description}</p>

                <div className="menu-card-footer">
                    <div className="menu-card-meta">
                        {renderSpicyLevel()}
                        {renderDietary()}
                    </div>

                    <button
                        className={`add-btn ${isInOrder ? 'added' : ''}`}
                        onClick={() => onToggle(item)}
                        aria-label={isInOrder ? 'Remove from order' : 'Add to order'}
                    >
                        {isInOrder ? (
                            <>
                                <span className="checkmark">✓</span> Added
                            </>
                        ) : (
                            <>
                                <span className="plus">+</span> Add
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuItemCard;
