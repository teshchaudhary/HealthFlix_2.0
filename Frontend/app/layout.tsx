'use client'
import NextTopLoader from 'nextjs-toploader';
import { Inter } from "next/font/google";
import Footer from '@/components/footer/Footer';
import ScrollToTop from '@/components/scrollTop/page';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        {children}
        {/* <Footer /> */}
        <ScrollToTop />
      </body>
    </html>
  );
}
