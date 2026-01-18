import React from 'react';
import { MenuItem } from '../types';
import './MyOrder.css';

interface MyOrderProps {
    items: MenuItem[];
    isOpen: boolean;
    onClose: () => void;
    onRemoveItem: (item: MenuItem) => void;
    onClearAll: () => void;
}

const MyOrder: React.FC<MyOrderProps> = ({
    items,
    isOpen,
    onClose,
    onRemoveItem,
    onClearAll
}) => {
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

    return (
        <>
            {isOpen && <div className="order-overlay" onClick={onClose} />}

            <div className={`my-order ${isOpen ? 'open' : ''}`}>
                <div className="order-header">
                    <div className="order-title-section">
                        <h2 className="order-title">My Order</h2>
                        {items.length > 0 && (
                            <span className="item-count">{items.length} {items.length === 1 ? 'item' : 'items'}</span>
                        )}
                    </div>
                    <button className="close-btn" onClick={onClose} aria-label="Close order">
                        ✕
                    </button>
                </div>

                <div className="order-content">
                    {items.length === 0 ? (
                        <div className="empty-order">
                            <div className="empty-icon">📋</div>
                            <p className="empty-text">Your order is empty</p>
                            <p className="empty-subtext">Start adding items from the menu</p>
                        </div>
                    ) : (
                        <>
                            <div className="order-items">
                                {items.map((item, index) => (
                                    <div key={`${item.id}-${index}`} className="order-item animate-slideUp">
                                        <div className="order-item-info">
                                            <h4 className="order-item-name">{item.name}</h4>
                                            <span className="order-item-price">${item.price.toFixed(2)}</span>
                                        </div>
                                        <button
                                            className="remove-btn"
                                            onClick={() => onRemoveItem(item)}
                                            aria-label={`Remove ${item.name}`}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="order-footer">
                                <div className="order-total">
                                    <span className="total-label">Total</span>
                                    <span className="total-amount">${totalPrice.toFixed(2)}</span>
                                </div>

                                <button className="clear-all-btn" onClick={onClearAll}>
                                    Clear All
                                </button>

                                <div className="order-note">
                                    <p>💡 <strong>Ready to order?</strong> Show this list to your server</p>
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
