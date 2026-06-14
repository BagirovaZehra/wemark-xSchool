import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const ttHoves = localFont({
  src: [
    {
      path: "../public/fonts/TT Hoves Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/TT Hoves Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-hoves", 
});

const ttFirsNeue = localFont({
  src: [
    {
      path: "../public/fonts/TT Firs Neue Trial Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/TT Firs Neue Trial Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-firs", 
});

export const metadata: Metadata = {
  title: "Wemark - xSchool",
  description: "Next.js 16 və TypeScript ilə yığılmış modern layihə",
  icons: {
    icon: 'images/logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az">
      <body className={`${ttHoves.variable} ${ttFirsNeue.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}