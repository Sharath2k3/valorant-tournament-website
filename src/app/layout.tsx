import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VALORESI",
  description: "ESI VALORANT Tournament Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className} suppressHydrationWarning>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
