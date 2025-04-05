# Sneakers E-commerce Store

A modern e-commerce platform for sneakers, built with Next.js.

![Sneakers Store Preview](./public/v2/preview.jpg)

## Project Overview

This project is a complete redesign of an e-commerce platform, focused on selling premium sneakers. The application features:

- Modern, responsive UI built with Next.js and SCSS modules
- Product collections organized by category (Men's, Women's, Kids')
- User authentication via Auth0
- Shopping cart functionality
- Checkout process with Stripe integration

## Tech Stack

- **Frontend**: Next.js 15, React 19, SCSS Modules
- **Authentication**: Auth0
- **Payments**: Stripe
- **Styling**: SCSS, Tailwind CSS
- **State Management**: React Context API

## Project Structure

The project follows a modular architecture:

```
src/
├── app/
│   ├── v2/                    # Main application code
│   │   ├── about/             # About page
│   │   ├── collection/        # Collection pages
│   │   ├── components/        # Reusable components
│   │   ├── context/           # Context providers
│   │   ├── home/              # Home page components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── products/          # Product category pages
│   │   ├── styles/            # Global styles and variables
│   │   └── types/             # TypeScript type definitions
│   ├── api/                   # API routes
│   │   └── auth/              # Authentication endpoints
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Root page
├── context/                   # Global context (Cart)
└── styles/                    # Global styles
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (see `.env.example`)
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

- **Product Collections**: Browse sneakers by category
- **Responsive Design**: Optimized for all device sizes
- **Authentication**: Sign up, login, and profile management
- **Shopping Cart**: Add, remove, and manage items
- **Checkout Process**: Secure payment processing with Stripe

## Future Enhancements

- Product search and filtering
- User reviews and ratings
- Wishlist functionality
- Order history and tracking
