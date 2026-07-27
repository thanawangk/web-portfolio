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

const SITE_URL = "https://bank.dev";
const TITLE = "Bank Thanawat — frontend engineer";
const DESCRIPTION =
  "Frontend-leaning software engineer in Bangkok. Design systems, animation, and the unglamorous details that turn “fine” into “wow”.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s — bank.dev" },
  description: DESCRIPTION,
  applicationName: "bank.dev",
  authors: [{ name: "Bank Thanawat", url: SITE_URL }],
  creator: "Bank Thanawat",
  openGraph: {
    type: "website",
    siteName: "bank.dev",
    url: "/",
    title: TITLE,
    description: "I make the web less boring.",
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
