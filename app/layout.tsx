import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liam Lawler | Filmmaker & Media Producer",
  description:
    "A cinematic portfolio for Liam Lawler, featuring filmmaking, media production, social media, creative projects, awards, skills, and contact details."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
