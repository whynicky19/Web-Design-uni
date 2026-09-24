import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alimzhan Galymzhan — Student Portfolio",
  description:
    "A simple student portfolio with projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
