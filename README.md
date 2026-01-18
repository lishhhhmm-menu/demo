# Restaurant Menu App 🍽️

A beautiful, practical single-page restaurant menu application designed for customers to browse menu items and prepare their order before the server arrives.

## Features

✨ **Categorized Menu** - Browse items by category (Appetizers, Mains, Pasta, Seafood, Desserts, Beverages)

🛒 **My Order List** - Add items to a temporary order list for easy ordering

📱 **Mobile-First Design** - Optimized for tablets and phones at restaurant tables

🎨 **Premium UI** - Elegant design with smooth animations and micro-interactions

🔍 **Dietary Information** - View dietary tags (vegetarian, gluten-free) and spicy levels

⭐ **Popular Items** - Highlighted popular menu items

## Local Development with Docker

### Prerequisites
- Docker Desktop installed and running

### Running the App

1. **Start the container:**
   ```bash
   docker-compose up
   ```

2. **Access the app:**
   Open your browser and navigate to `http://localhost:3000`

3. **Hot Reload:**
   The app will automatically refresh when you make changes to the code

4. **Stop the container:**
   ```bash
   docker-compose down
   ```

## GitHub Pages Deployment

### Initial Setup

1. **Update `vite.config.ts`:**
   Change the `base` property to match your repository name:
   ```typescript
   base: '/your-repo-name/',
   ```

2. **Install dependencies** (run inside container or locally):
   ```bash
   npm install
   ```

### Deploy to GitHub Pages

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

OR use the included GitHub Actions workflow (see `.github/workflows/deploy.yml`)

### GitHub Actions Auto-Deploy

Push to the `main` branch and GitHub Actions will automatically build and deploy to GitHub Pages.

## Project Structure

```
menu/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── CategoryFilter.tsx
│   │   ├── MenuItemCard.tsx
│   │   └── MyOrder.tsx
│   ├── data/           # Menu data
│   │   └── menuData.ts
│   ├── App.tsx         # Main app component
│   ├── App.css         # App styles
│   ├── index.css       # Global styles & design system
│   ├── main.tsx        # Entry point
│   └── types.ts        # TypeScript types
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose setup
└── package.json        # Dependencies
```

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **CSS** - Styling (no framework, pure CSS)
- **Docker** - Local development
- **GitHub Pages** - Hosting

## Customization

### Update Menu Items

Edit `src/data/menuData.ts` to customize:
- Categories
- Menu items
- Prices
- Descriptions
- Dietary information

### Change Restaurant Name

Update in `src/App.tsx`:
```tsx
<h1 className="restaurant-name">Your Restaurant Name</h1>
```

### Modify Colors

Edit design tokens in `src/index.css`:
```css
:root {
  --accent-primary: #FF6B35;  /* Change primary color */
  --accent-hover: #E85A28;    /* Change hover color */
  /* ... */
}
```

## License

MIT License - Feel free to use this for your restaurant!
