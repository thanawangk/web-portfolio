import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const siteUrl = "https://bankthanawat.vercel.app/";
const siteTitle = "Thanawat Wangkhem – Software Engineer";
const siteDescription =
  "Software Engineer who does a bit of web development with a passion for great design.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: "%s — bankthanawat.dev" },
  description: siteDescription,
  applicationName: "bankthanawat.dev",
  authors: [{ name: "Bank Thanawat", url: siteUrl }],
  creator: "Bank Thanawat",
  openGraph: {
    type: "website",
    siteName: "bankthanawat.dev",
    url: "/",
    title: siteTitle,
    description: "I make the web bit cooler.",
    images: ["/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${caveat.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
