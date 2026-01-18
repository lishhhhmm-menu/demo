import React, { useState, useMemo } from 'react';
import CategoryFilter from './components/CategoryFilter';
import MenuItemCard from './components/MenuItemCard';
import MyOrder from './components/MyOrder';
import LanguageSwitcher from './components/LanguageSwitcher';
import { categories, menuItems } from './data/menuData';
import { translations } from './data/translations';
import { MenuItem, OrderItem, Language } from './types';
import './App.css';

function App() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
    const [isOrderOpen, setIsOrderOpen] = useState(false);
    const [language, setLanguage] = useState<Language>('el');

    const t = translations[language];

    const filteredItems = useMemo(() => {
        if (!activeCategory) return menuItems;
        return menuItems.filter(item => item.category === activeCategory);
    }, [activeCategory]);

    const addItemToOrder = (item: MenuItem) => {
        setOrderItems(prev => {
            const existingItem = prev.find(orderItem => orderItem.menuItem.id === item.id);
            if (existingItem) {
                return prev.map(orderItem =>
                    orderItem.menuItem.id === item.id
                        ? { ...orderItem, quantity: orderItem.quantity + 1 }
                        : orderItem
                );
            } else {
                return [...prev, { menuItem: item, quantity: 1 }];
            }
        });
    };

    const removeItemFromOrder = (item: MenuItem) => {
        setOrderItems(prev => {
            const existingItem = prev.find(orderItem => orderItem.menuItem.id === item.id);
            if (!existingItem) return prev;

            if (existingItem.quantity === 1) {
                return prev.filter(orderItem => orderItem.menuItem.id !== item.id);
            } else {
                return prev.map(orderItem =>
                    orderItem.menuItem.id === item.id
                        ? { ...orderItem, quantity: orderItem.quantity - 1 }
                        : orderItem
                );
            }
        });
    };

    const increaseQuantity = (itemId: string) => {
        setOrderItems(prev =>
            prev.map(orderItem =>
                orderItem.menuItem.id === itemId
                    ? { ...orderItem, quantity: orderItem.quantity + 1 }
                    : orderItem
            )
        );
    };

    const decreaseQuantity = (itemId: string) => {
        setOrderItems(prev => {
            const item = prev.find(orderItem => orderItem.menuItem.id === itemId);
            if (!item) return prev;

            if (item.quantity === 1) {
                return prev.filter(orderItem => orderItem.menuItem.id !== itemId);
            } else {
                return prev.map(orderItem =>
                    orderItem.menuItem.id === itemId
                        ? { ...orderItem, quantity: orderItem.quantity - 1 }
                        : orderItem
                );
            }
        });
    };

    const clearAllItems = () => {
        setOrderItems([]);
    };

    const getItemQuantity = (item: MenuItem) => {
        const orderItem = orderItems.find(orderItem => orderItem.menuItem.id === item.id);
        return orderItem ? orderItem.quantity : 0;
    };

    const totalItemCount = orderItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="app">
            {/* Restaurant Title */}
            <div className="restaurant-header">
                <h1 className="restaurant-name">{t.restaurantName}</h1>
                <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
            </div>

            {/* Category Navigation */}
            <div className="sticky-nav">
                <CategoryFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    t={t}
                />
            </div>

            {/* Menu Grid */}
            <main className="menu-container">
                <div className="menu-grid">
                    {filteredItems.map((item) => (
                        <MenuItemCard
                            key={item.id}
                            item={item}
                            quantity={getItemQuantity(item)}
                            onAdd={addItemToOrder}
                            onRemove={removeItemFromOrder}
                            t={t}
                        />
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="no-items">
                        <p>No items found in this category</p>
                    </div>
                )}
            </main>

            {/* Fixed Bottom Container - shows empty message or order button */}
            <div className="bottom-container">
                {totalItemCount === 0 ? (
                    <div className="empty-order-message">
                        <p>{t.emptyOrder}</p>
                    </div>
                ) : (
                    <button className="order-btn" onClick={() => setIsOrderOpen(true)}>
                        <span style={{ fontSize: '1.25rem' }}>📋</span>
                        <span>{t.myOrder}</span>
                        <span className="order-badge">{totalItemCount}</span>
                    </button>
                )}
            </div>

            {/* Order Panel */}
            <MyOrder
                items={orderItems}
                isOpen={isOrderOpen}
                onClose={() => setIsOrderOpen(false)}
                onIncreaseQuantity={increaseQuantity}
                onDecreaseQuantity={decreaseQuantity}
                onClearAll={clearAllItems}
                t={t}
            />
        </div>
    );
}

export default App;
