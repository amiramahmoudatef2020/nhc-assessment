'use client';
import Footer from '../components/Footer';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import Header from '../components/Header/Header';
import './globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <NuqsAdapter>
          <main className="main-content">{children}</main>
        </NuqsAdapter>
        <Footer />
      </body>
    </html>
  );
}
