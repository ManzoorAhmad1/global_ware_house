# Global Warehouse - E-Commerce Website

A professional, industrial-level e-commerce website built with Next.js 14, TypeScript, Tailwind CSS, Redux Toolkit, and Rizzui components.

## 🎨 Features

- **Modern UI/UX**: Clean, professional design with blue and white color scheme
- **Dark Mode**: Full dark mode support with smooth transitions
- **Product Categories**: Clothing, Shoes, and Accessories with filtering
- **Shopping Cart**: Complete cart management with Redux
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: Framer Motion powered animations
- **Mock Data**: Ready-to-use mock product data
- **Axios Setup**: Pre-configured axios with interceptors for future API integration

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products page
│   ├── why-choose-us/     # Why Choose Us page
│   ├── globals.css        # Global styles with custom CSS classes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── componet/              # Components
│   ├── cart/              # Cart drawer component
│   ├── home/              # Home page components
│   └── layout/            # Header and Footer
├── data/                  # Mock data
│   └── mockData.ts        # Product and category mock data
├── lib/                   # Utilities
│   └── axios.ts           # Axios configuration with interceptors
├── providers/             # Context providers
│   ├── ReduxProvider.tsx  # Redux store provider
│   └── ThemeProvider.tsx  # Theme (dark/light mode) provider
└── redux/                 # Redux store
    ├── hooks.ts           # Typed Redux hooks
    ├── store.ts           # Redux store configuration
    └── slices/            # Redux slices
        ├── cartSlice.ts   # Shopping cart state
        └── productsSlice.ts # Products state
```

## 🚀 Getting Started

### Installation

```bash
npm install --legacy-peer-deps
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## 🎯 Pages

1. **Home** (`/`) - Hero section, features, testimonials, and about preview
2. **Products** (`/products`) - Product catalog with category filtering
3. **About** (`/about`) - Company story, values, and team
4. **Why Choose Us** (`/why-choose-us`) - Benefits and reasons to choose
5. **Contact** (`/contact`) - Contact form and FAQs

## 🛒 Shopping Cart

- Add products to cart with quantity, size, and color options
- Update quantities or remove items
- Persistent cart state with Redux
- Cart drawer with smooth animations

## 🎨 Customization

### Colors

The color scheme uses CSS variables defined in `globals.css`:

```css
:root {
  --primary-blue: #2563eb;
  --primary-dark-blue: #1e40af;
  --primary-light-blue: #3b82f6;
  --accent-blue: #60a5fa;
  /* ... more colors */
}
```

### Adding Products

Edit `src/data/mockData.ts` to add or modify products:

```typescript
{
  id: 'product-id',
  name: 'Product Name',
  description: 'Product description',
  price: 99.99,
  originalPrice: 129.99,
  image: '/path/to/image.jpg',
  category: 'clothing', // 'clothing', 'shoes', or 'accessories'
  rating: 4.5,
  reviews: 100,
  inStock: true,
  badge: 'New', // optional
  sizes: ['S', 'M', 'L'],
  colors: ['Black', 'White'],
}
```

## 🔌 API Integration (Future)

The project includes an axios configuration with interceptors for easy API integration:

```typescript
import { api } from '@/lib/axios';

// Get all products
const products = await api.getProducts();

// Get products by category
const categoryProducts = await api.getProductsByCategory('clothing');

// Create an order
const order = await api.createOrder(orderData);
```

To use real API:
1. Set `NEXT_PUBLIC_API_URL` in `.env.local`
2. Update API methods in `src/lib/axios.ts`
3. Replace mock data with API calls in components

## 🎨 Custom CSS Classes

The project includes utility classes in `globals.css`:

- `.product-card` - Product card styling
- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.btn-outline` - Outline button
- `.section` - Section spacing
- `.container-custom` - Container with max-width
- `.heading-1/2/3` - Heading sizes
- `.subtitle` - Subtitle text
- `.badge-primary/success/sale` - Badge variants
- `.animate-fade-in` - Fade in animation
- `.animate-slide-in-left/right` - Slide animations
- `.animate-float` - Floating animation

## 📱 Mobile Responsive

All pages and components are fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

Dark mode is implemented using `next-themes`:
- Toggle in header
- Smooth transitions
- Persistent preference
- System default detection

## 🎬 Animations

Animations powered by Framer Motion:
- Page transitions
- Scroll animations
- Hover effects
- Cart drawer slide
- Product card effects

## 📦 Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Redux Toolkit** - State management
- **Rizzui** - UI component library
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Hot Toast** - Notifications
- **Axios** - HTTP client
- **next-themes** - Dark mode

## 🔜 Future Enhancements

- [ ] User authentication
- [ ] Payment integration (Stripe/PayPal)
- [ ] Order history
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Product search
- [ ] Advanced filtering (price range, brand, etc.)
- [ ] Product recommendations
- [ ] Email notifications
- [ ] Admin dashboard

## 📄 License

This project is created for [Client Name]. All rights reserved.

## 👨‍💻 Developer

Developed with ❤️ for professional e-commerce solutions.

---

**Note**: Replace mock images and data with actual content before deployment.
