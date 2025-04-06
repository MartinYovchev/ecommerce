'use client';

import { CartProvider } from '@/app/v2/context/CartContext';
import Footer from '@/app/v2/components/Footer/Footer';

import { UserProvider } from '@auth0/nextjs-auth0/client';
import '@/app/v2/styles/global.css';
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
              <Navbar />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '100vh',
                }}
              >
                <main style={{ flex: 1 }}>{children}</main>
                <Footer />
              </div>
            </CartProvider>
          </Router>
        </UserProvider>
      </body>
    </html>
  );
}
