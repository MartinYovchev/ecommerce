'use client';

import { CartProvider } from '@/app/context/CartContext';
import Footer from '@/app/components/Footer/Footer';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import '@/app/styles/global.css';
import Navbar from './components/Navbar/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
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
        </UserProvider>
      </body>
    </html>
  );
}
