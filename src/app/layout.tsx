import { CartProvider } from '@/context/CartContext';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </body>
      </UserProvider>
    </html>
  );
}
