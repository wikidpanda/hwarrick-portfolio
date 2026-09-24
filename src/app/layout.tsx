import type { Metadata } from "next";
import { DM_Sans, EB_Garamond } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.title}`,
  description: site.tagline,
  metadataBase: new URL(`https://${site.domain}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
