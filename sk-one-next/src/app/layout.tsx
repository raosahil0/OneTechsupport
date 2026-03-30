import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "S'K One Tech Support - IT Services & Staffing Agency",
  description: "Empowering businesses with innovative IT solutions and expert staffing services. Trusted by SMEs across North India.",
  keywords: ["IT services", "staffing agency", "tech support", "IT consulting", "North India"],
  authors: [{ name: "S'K One Tech Support" }],
  openGraph: {
    title: "S'K One Tech Support - IT Services & Staffing Agency",
    description: "Empowering businesses with innovative IT solutions and expert staffing services.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "S'K One Tech Support",
    description: "Empowering businesses with innovative IT solutions and expert staffing services.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-body bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
