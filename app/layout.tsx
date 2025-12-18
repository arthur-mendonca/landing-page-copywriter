import type { Metadata } from "next";
import { Playfair, Lato } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

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
    <html lang="pt-br">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
