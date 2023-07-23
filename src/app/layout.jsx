import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import SearchHeader from "@/components/SearchHeader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " relative min-h-screen"}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
