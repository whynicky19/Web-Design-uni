import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steppe & Steam | Coffee Atelier",
  description: "Small-batch coffee, steppe tea, and brewing tools from an independent Almaty atelier.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
