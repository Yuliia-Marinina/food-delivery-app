# Food Delivery App

A modern food delivery platform built with Angular 21, featuring separate interfaces for customers and administrators.

## 🚀 Features

### For Customers

- Browse food catalog with categories and filters
- View detailed product information
- Add items to cart and manage orders
- User authentication and profile management
- Order tracking and history
- Favorites list
- Multi-language support (EN, DE, RU)
- Light/Dark theme

### For Administrators

- Product management (CRUD operations)
- Order management and tracking
- User management
- Category and promocode management
- Sales statistics and analytics dashboard

## 🛠️ Tech Stack

- **Framework:** Angular 21 (Standalone Components)
- **Styling:** SCSS
- **State Management:** RxJS / Signals
- **Routing:** Angular Router with Guards
- **HTTP Client:** Angular HttpClient
- **Build Tool:** Angular CLI

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v21)

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/Yuliia-Marinina/food-delivery-app.git
cd food-delivery-app
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## 📁 Project Structure

```
src/
├── app/
│   ├── core/          # Core services, guards, interceptors
│   ├── shared/        # Shared components, directives, pipes
│   ├── features/      # Feature modules (auth, products, cart, etc.)
│   └── layout/        # Layout components
├── assets/            # Static files (images, i18n)
├── styles/            # Global styles and SCSS utilities
└── environments/      # Environment configurations
```

## 🚀 Available Scripts

- `ng serve` - Run development server
- `ng build` - Build the project for production
- `ng test` - Run unit tests
- `ng lint` - Lint the code

## 🌍 Deployment

Coming soon...

## 📝 Git Workflow

This project follows Git Flow branching strategy:

- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches
- `hotfix/*` - Hotfix branches

## 👤 Author

**Yuliia Marinina**

- GitHub: [@Yuliia-Marinina](https://github.com/Yuliia-Marinina)

## 📄 License

This project is for portfolio purposes.

## 🔮 Roadmap

- [ ] User authentication
- [ ] Product catalog
- [ ] Shopping cart
- [ ] Order management
- [ ] Admin panel
- [ ] Payment integration
- [ ] Order tracking
- [ ] Multi-language support
- [ ] Dark theme
- [ ] Mobile responsive design
