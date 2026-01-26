import React from 'react';
import { OrderItem, Translations } from '../types';

interface OrderPanelItemProps {
    item: OrderItem;
    t: Translations;
    onIncrease: (id: string) => void;
    onDecrease: (id: string) => void;
    onPreviewImage: (url: string | null, title?: string) => void;
}

const OrderPanelItem: React.FC<OrderPanelItemProps> = ({
    item,
    t,
    onIncrease,
    onDecrease,
    onPreviewImage
}) => {
    return (
        <div className="order-item">
            <h4
                className="order-item-name"
                onClick={() => item.menuItem.image && onPreviewImage(item.menuItem.image, t.menuItems[item.menuItem.name])}
                style={{ cursor: item.menuItem.image ? 'pointer' : 'inherit' }}
            >
                <span className="order-item-title-text">{t.menuItems[item.menuItem.name]}</span>
                {item.menuItem.image && (
                    <span className="image-icon-indicator" aria-label="View image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                    </span>
                )}
            </h4>
            <p className="order-item-description">{t.menuItems[`${item.menuItem.name}-desc`]}</p>
            <div className="order-item-footer">
                <span className="order-item-price">{item.menuItem.price.toFixed(2)} €</span>
                <div className="order-qty-controls"
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                >
                    <button
                        className="order-qty-btn minus"
                        onClick={(e) => { e.stopPropagation(); onDecrease(item.menuItem.id); }}
                        aria-label="Decrease quantity"
                    >
                        −
                    </button>
                    <span className="order-qty-display">{item.quantity}</span>
                    <button
                        className="order-qty-btn plus"
                        onClick={(e) => { e.stopPropagation(); onIncrease(item.menuItem.id); }}
                        aria-label="Increase quantity"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderPanelItem;
