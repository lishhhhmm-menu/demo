import { useState, useMemo, useEffect } from 'react';
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

    useEffect(() => {
        const themeColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-color').trim();
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" rx="20" ry="20" fill="${themeColor}"/><text x="50" y="65" font-size="50" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold">M</text></svg>`;
        const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
        if (link) {
            link.href = `data:image/svg+xml;base64,${btoa(svg)}`;
        }
    }, [language]); // Re-running on language change is arbitrary, ideally should just happen on mount or theme change detection, but React component interaction works well enough.
    // Better yet, just put it in a useEffect with no deps if the theme doesn't change at runtime, OR observe styles. Since we change theme manually in code, a simple run on mount is fine, but if we want it to react to manual css edits during dev, it might need more.
    // Let's stick to a simple useEffect that runs once, as the theme is set in CSS. 
    // Actually, `getComputedStyle` inside useEffect might read the value correctly.


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
                {/* Render sections based on active category or all categories */}
                {(activeCategory ? categories.filter(c => c.id === activeCategory) : categories).map(category => {
                    const categoryItems = menuItems.filter(item => item.category === category.id);
                    if (categoryItems.length === 0) return null;

                    return (
                        <div key={category.id} className="menu-section">
                            <h2 className="section-title">
                                {t.categories[category.id] || category.name}
                            </h2>
                            <div className="menu-grid">
                                {categoryItems.map((item) => (
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
                        </div>
                    );
                })}

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
