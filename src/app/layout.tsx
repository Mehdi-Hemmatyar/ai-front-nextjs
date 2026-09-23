import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
// @ts-expect-error Next.js handles global CSS imports at build time.
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { DirectionProvider } from "@base-ui/react/direction-provider";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agent Inbox",
  description: "Agent Inbox UX by LangChain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} dir="rtl">
        <DirectionProvider direction={"rtl"}>
          <ThemeProvider>
            <NuqsAdapter>
              <Toaster />
              {children}
            </NuqsAdapter>
          </ThemeProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
