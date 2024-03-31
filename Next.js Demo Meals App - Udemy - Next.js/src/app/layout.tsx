import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/MainHeader/MainHeader";

export const metadata: Metadata = {
  title: "Next.js Demo Meals App",
  description: "Share and browse your favorite meals in our community",
};

const RootLayout = (props: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {props.children}
      </body>
    </html>
  );
};

export default RootLayout;
