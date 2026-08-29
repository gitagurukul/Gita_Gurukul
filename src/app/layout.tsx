import type { Metadata } from "next";
import { Cormorant, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AuthProvider } from "@/context/AuthContext";
import LoginModal from "@/components/LoginModal";
import Script from "next/script";
import "./globals.css";

const cormorant = Cormorant({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Gita Gurukul | Eternal Vedic Wisdom for the Modern Seeker",
    template: "%s | Gita Gurukul",
  },
  description: "Discover the profound teachings of the Bhagavad Gita with Gita Gurukul. A perfect companion for daily reflection, spiritual growth, and bringing calmness into your everyday life through ancient Vedic wisdom and Krishna consciousness.",
  keywords: ["Bhagavad Gita", "Gita Gurukul", "Vedic Wisdom", "Daily Reflection", "Spiritual Growth", "Krishna Consciousness", "Rishikesh", "Meditation", "Mindfulness Diary", "Hindu Philosophy"],
  authors: [{ name: "Gita Gurukul" }],
  creator: "Gita Gurukul",
  publisher: "Gita Gurukul",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gita Gurukul | Eternal Vedic Wisdom",
    description: "Bring ancient Vedic wisdom into your modern daily life. Start your journey of spiritual growth and mindful reflection.",
    url: "https://www.gitagurukul.com",
    siteName: "Gita Gurukul",
    images: [
      {
        url: "/images/1_1.png", // Hero image used as OG image
        width: 1200,
        height: 630,
        alt: "Gita Gurukul - Eternal Wisdom",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gita Gurukul | Eternal Vedic Wisdom",
    description: "Bring ancient Vedic wisdom into your modern daily life. Start your journey of spiritual growth and mindful reflection.",
    images: ["/images/1_1.png"],
  },
  verification: {
    google: "ADD_YOUR_GOOGLE_SEARCH_CONSOLE_HTML_TAG_ID_HERE",
  },
  other: {
    "geo.region": "IN-UK",
    "geo.placename": "Rishikesh",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-body font-semibold bg-[#FDFBF7] text-brand-dark">
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
        <AuthProvider>
          <Navbar />
          <LoginModal />
          <WhatsAppWidget />
          <main className="flex-1 flex flex-col w-full min-h-screen">
            {children}
          </main>
          <Footer />
        </AuthProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

