import React, { useState, useMemo } from 'react';
import CategoryFilter from './components/CategoryFilter';
import MenuItemCard from './components/MenuItemCard';
import MyOrder from './components/MyOrder';
import { categories, menuItems } from './data/menuData';
import { MenuItem } from './types';
import './App.css';

function App() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [orderItems, setOrderItems] = useState<MenuItem[]>([]);
    const [isOrderOpen, setIsOrderOpen] = useState(false);

    const filteredItems = useMemo(() => {
        if (!activeCategory) return menuItems;
        return menuItems.filter(item => item.category === activeCategory);
    }, [activeCategory]);

    const toggleOrderItem = (item: MenuItem) => {
        setOrderItems(prev => {
            const isInOrder = prev.some(orderItem => orderItem.id === item.id);
            if (isInOrder) {
                return prev.filter(orderItem => orderItem.id !== item.id);
            } else {
                return [...prev, item];
            }
        });
    };

    const removeOrderItem = (item: MenuItem) => {
        setOrderItems(prev => prev.filter(orderItem => orderItem.id !== item.id));
    };

    const clearAllItems = () => {
        setOrderItems([]);
    };

    const isItemInOrder = (item: MenuItem) => {
        return orderItems.some(orderItem => orderItem.id === item.id);
    };

    return (
        <div className="app">
            {/* Restaurant Title */}
            <div className="restaurant-header">
                <h1 className="restaurant-name">Bella Tavola</h1>
                <p className="restaurant-tagline">Browse our menu and prepare your order</p>
            </div>

            {/* Category Navigation */}
            <div className="sticky-nav">
                <CategoryFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />
            </div>

            {/* Menu Grid */}
            <main className="menu-container container">
                <div className="menu-grid">
                    {filteredItems.map((item) => (
                        <MenuItemCard
                            key={item.id}
                            item={item}
                            isInOrder={isItemInOrder(item)}
                            onToggle={toggleOrderItem}
                        />
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="no-items">
                        <p>No items found in this category</p>
                    </div>
                )}
            </main>

            {/* Floating Order Button */}
            <button
                className={`floating-order-btn ${orderItems.length > 0 ? 'has-items' : ''}`}
                onClick={() => setIsOrderOpen(true)}
            >
                <span className="order-icon">🛒</span>
                <span className="order-text">My Order</span>
                {orderItems.length > 0 && (
                    <span className="order-badge">{orderItems.length}</span>
                )}
            </button>

            {/* Order Panel */}
            <MyOrder
                items={orderItems}
                isOpen={isOrderOpen}
                onClose={() => setIsOrderOpen(false)}
                onRemoveItem={removeOrderItem}
                onClearAll={clearAllItems}
            />
        </div>
    );
}

export default App;
