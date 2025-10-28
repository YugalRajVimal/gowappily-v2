"use client";

import "./css/style.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { CustomerAuthProvider } from "@/context/CustomerAuthContext";
import CustomerProtectedRoute from "@/ProtectedRoutes/CustomerProtectedRoute";
import Footer from "@/components/ui/footer";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={`
          
          
          font-inter text-base antialiased transition-colors duration-300`}
        >
          <CustomerAuthProvider>
            <CustomerProtectedRoute>
              <div className="flex min-h-screen pt-[10vh] flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
                <Header />
                {children}
                <Footer />
              </div>
            </CustomerProtectedRoute>
          </CustomerAuthProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
