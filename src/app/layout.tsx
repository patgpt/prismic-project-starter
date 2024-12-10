import type { Metadata } from "next";
import "./globals.css";
import { fontMono, fontSans } from "@/app/fonts/font";
import cn from "@/utils/cn";

export const metadata: Metadata = {
  title: "Next.js 15 with tailwindcss and Prismic",
  description: "Next.js 15 with tailwindcss and Prismic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontSans.variable, fontMono.variable, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
