import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/componet/layout/Header";
import Footer from "@/componet/layout/Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { Toaster } from "react-hot-toast";
import ProgressBar from "@/componet/ProgressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global Warehouse - Your Premium E-Commerce Destination",
  description: "Shop the latest fashion trends in clothing, shoes, and accessories. Premium quality products with fast shipping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ProgressBar />
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}