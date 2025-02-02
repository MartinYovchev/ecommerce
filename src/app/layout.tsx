'use client';

import { CartProvider } from '@/context/CartContext';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { useIsMobile } from '@hooks/useIsMobile';
import MobileHeader from '@/components/layout/MobileHeader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = useIsMobile();

  return (
    <html lang="en">
      <body>
        <UserProvider>
          <CartProvider>
            {isMobile ? <MobileHeader /> : <Header />}
            {children}
            <Footer />
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
