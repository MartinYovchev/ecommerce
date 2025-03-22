'use client';

import { CartProvider } from '@/context/CartContext';
import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import '@/app/v2/styles/global.scss';
import Navbar from './v2/components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <Router>
            <CartProvider>
              {/* <Header /> */}
              <Navbar />
              <main className="container">{children}</main>
              <Footer />
            </CartProvider>
          </Router>
        </UserProvider>
      </body>
    </html>
  );
}
