import type { Metadata } from "next";
import { Inter, Monda } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const monda = Monda({
  variable: "--font-monda",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Krea AI",
  description: "AI-powered image and video generation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${monda.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
