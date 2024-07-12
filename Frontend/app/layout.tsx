'use client'
import NextTopLoader from 'nextjs-toploader'
import { Inter } from "next/font/google";
import Navbar from "../components/navbar/page";
const inter = Inter({ subsets: ["latin"] });
import Footer from '@/components/footer/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <NextTopLoader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
