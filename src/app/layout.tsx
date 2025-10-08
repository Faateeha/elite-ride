import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Elite Ride",
  description: "Redefining airport and interstate travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${montserrat.variable} font-montserrat`}>
        <Navbar/>
        {children}
        <Footer />
        </body>
    </html>
  );
}
