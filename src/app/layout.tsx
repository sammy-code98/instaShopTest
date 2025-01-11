import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "InstaShop",
  description: "The safest platfrom to shop from social media vendors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
