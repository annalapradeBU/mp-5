import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
// import registry so styled compoennts actually work 
import StyledComponentsRegistry from "../lib/registry";

// fonts fonts fonts! 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Speedy URL Shortener",
  description: "CS391 mp-5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "#040F16", margin: 0 }}>
        
        <StyledComponentsRegistry>
          <Header />
          <div className="flex-grow">
            {children}
          </div>
        </StyledComponentsRegistry>

      </body>
    </html>
  );
}