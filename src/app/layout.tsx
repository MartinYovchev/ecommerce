import { CartProvider } from '@/context/CartContext';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </body>
    </html>
  );
}
