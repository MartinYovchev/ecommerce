import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
