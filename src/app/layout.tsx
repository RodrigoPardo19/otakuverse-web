import type { Metadata } from "next";
import "./globals.css";
import {roboto} from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Otakuverse",
  description: "A platform for anime and manga reviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
