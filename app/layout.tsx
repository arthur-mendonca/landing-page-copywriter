import type { Metadata } from "next";
import { Playfair, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: "Copywriter de Excelência",
  description: "Torne-se um copywriter de sucesso do zero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
