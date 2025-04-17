import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tian Kitchen",
  description: "A kitchen for Tian & Law",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
          <div className="max-w-6xl w-full">
            <Navbar />
          </div>
        </nav>

        <main className="flex flex-col items-center border-b">
          <div className="max-w-6xl w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
