import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Htroy Research Network",
  description:
    "AS139216 is an experimental network.Also known as Htroy Network Research Limited.",
  openGraph: {
    title: "Htroy Research Network",
    description:
        "AS139216 is an experimental network.Also known as Htroy Network Research Limited.",
    url: "https://www.139216.network/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>

      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
