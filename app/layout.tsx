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

const SITE_URL = "https://bankthanawat.vercel.app/";
const TITLE = "Thanawat Wangkhem - Web Developer";
const DESCRIPTION =
  "Developer from Thailand, who does a bit of web development with a passion for great design.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s — bankthanawat.dev" },
  description: DESCRIPTION,
  applicationName: "bankthanawat.dev",
  authors: [{ name: "Bank Thanawat", url: SITE_URL }],
  creator: "Bank Thanawat",
  openGraph: {
    type: "website",
    siteName: "bankthanawat.dev",
    url: "/",
    title: TITLE,
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
