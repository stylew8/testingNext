import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Urban Art Studio | Professional Graffiti Art Services',
  description: 'Custom graffiti art services for businesses and individuals. Transform your space with unique, professional graffiti designs. Get a free quote today!',
  keywords: 'graffiti art, custom graffiti, professional graffiti, urban art, wall murals, street art',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}