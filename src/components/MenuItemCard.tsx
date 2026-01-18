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
    return (
        <div className={`menu-card ${quantity > 0 ? 'in-order' : ''}`}>
            <div className="menu-card-content">
                <h3 className="menu-item-name">{t.menuItems[item.name]}</h3>

                <p className="menu-item-description">{t.menuItems[item.description]}</p>

                <div className="menu-card-footer">
                    <span className="menu-item-price">€{item.price.toFixed(2)}</span>

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
