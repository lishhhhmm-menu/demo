import React, { useEffect } from 'react';
import { OrderItem, Translations } from '../types';
import { categories } from '../data/menuData';
import './MyOrder.css';

interface MyOrderProps {
    items: OrderItem[];
    isOpen: boolean;
    onClose: () => void;
    onIncreaseQuantity: (itemId: string) => void;
    onDecreaseQuantity: (itemId: string) => void;
    onClearAll: () => void;
    t: Translations;
}

const MyOrder: React.FC<MyOrderProps> = ({
    items,
    isOpen,
    onClose,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onClearAll,
    t
}) => {
    const totalPrice = items.reduce((sum, item) => sum + (item.menuItem.price * item.quantity), 0);
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    // Prevent body scroll when panel is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);


    return (
        <>
            <div className={`order-panel-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose} />

            <div className={`my-order ${isOpen ? 'open' : ''}`}>
                <div className="order-header">
                    <div className="order-title-section">
                        <h2 className="order-title">{t.myOrder}</h2>
                        {totalItems > 0 && (
                            <span className="item-count">
                                {totalItems} {totalItems === 1 ? t.item : t.items}
                            </span>
                        )}
                    </div>
                </div>

                <div className="order-content">
                    {items.length === 0 ? (
                        <div className="empty-order">
                            <p className="empty-text">{t.emptyOrder}</p>
                            <p className="empty-subtext">{t.emptyOrderSubtext}</p>
                        </div>
                    ) : (
                        <>
                            <div className="order-items">
                                {categories.map(category => {
                                    const categoryItems = items.filter(item => item.menuItem.category === category.id);
                                    if (categoryItems.length === 0) return null;

                                    return (
                                        <div key={category.id} className="order-category-group">
                                            <h3 className="order-category-title">
                                                {t.categories[category.id] || category.name}
                                            </h3>
                                            <div className="category-items-list">
                                                {categoryItems.map((item) => (
                                                    <div key={item.menuItem.id} className="order-item">
                                                        <h4 className="order-item-name">{t.menuItems[item.menuItem.name]}</h4>
                                                        <p className="order-item-description">{t.menuItems[`${item.menuItem.name}-desc`]}</p>
                                                        <div className="order-item-footer">
                                                            <span className="order-item-price">{item.menuItem.price.toFixed(2)} €</span>
                                                            <div className="order-qty-controls">
                                                                <button
                                                                    className="order-qty-btn minus"
                                                                    onClick={() => onDecreaseQuantity(item.menuItem.id)}
                                                                    aria-label="Decrease quantity"
                                                                >
                                                                    −
                                                                </button>
                                                                <span className="order-qty-display">{item.quantity}</span>
                                                                <button
                                                                    className="order-qty-btn plus"
                                                                    onClick={() => onIncreaseQuantity(item.menuItem.id)}
                                                                    aria-label="Increase quantity"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="order-footer">
                                <div className="footer-actions">
                                    <div className="order-total">
                                        <span className="total-amount">{totalPrice.toFixed(2)} €</span>
                                    </div>
                                    <button className="clear-all-btn" onClick={onClearAll}>
                                        {t.clearAll}
                                    </button>
                                </div>

                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default MyOrder;
