'use client';

import Footer from '@/app/components/Footer/Footer';
import '@/app/styles/global.css';
import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navbar/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navigation />
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
        </AuthProvider>
      </body>
    </html>
  );
}
