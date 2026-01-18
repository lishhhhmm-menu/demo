import React from 'react';
import { MenuItem, Translations } from '../types';
import './MenuItemCard.css';

interface MenuItemCardProps {
    item: MenuItem;
    quantity: number;
    onAdd: (item: MenuItem) => void;
    onRemove: (item: MenuItem) => void;
    t: Translations;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
    item,
    quantity,
    onAdd,
    onRemove,
    t
}) => {
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
                        {t.dietary[tag as keyof typeof t.dietary] || tag}
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div className={`menu-card ${quantity > 0 ? 'in-order' : ''}`}>
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

                    {quantity > 0 ? (
                        <div className="quantity-controls">
                            <button
                                className="qty-btn minus"
                                onClick={() => onRemove(item)}
                                aria-label="Decrease quantity"
                            >
                                −
                            </button>
                            <span className="qty-display">{quantity}</span>
                            <button
                                className="qty-btn plus"
                                onClick={() => onAdd(item)}
                                aria-label="Increase quantity"
                            >
                                +
                            </button>
                        </div>
                    ) : (
                        <button
                            className="add-btn"
                            onClick={() => onAdd(item)}
                            aria-label="Add to order"
                        >
                            <span className="plus">+</span> {t.add}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuItemCard;
