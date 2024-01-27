import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import BottomBar from '@/components/organisms/Bottombar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mealapp',
  description: 'See All The Delicious Foods',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <BottomBar />
      </body>
    </html>
  );
}
