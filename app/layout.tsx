import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CookieBanner from "../components/cookie";
import { Analytics } from "@vercel/analytics/react"
import StructuredData from "../components/StructuredData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Luxury 2-Bedroom Apartment in Yambol City Center | The Lindens Bulgaria",
  description: "Experience modern living in Yambol's walking zone. Newly renovated 2024 apartment with smart amenities, city views, and free parking. Perfect for business travelers and families. Book through trusted platforms.",
  keywords: [
    "Yambol monthly stay",
    "Yambol short term rental",
    "Downtown Apartment Yambol",
    "Yambol long term accommodation",
    "City center apartment Yambol",
    "Yambol Bulgaria monthly rental",
    "Linden apartments Yambol",
    "Short stay apartment Yambol",
    "Extended stay Yambol Bulgaria",
    "Yambol short stay accommodation",
    "Central Yambol rental apartment",
    "Fully equipped apartment Yambol",
    "2 bedroom apartment Yambol",
    "Yambol city center monthly stay",
    "Yambol furnished apartment rental",
    "Modern apartment Yambol Bulgaria",
    "Affordable rental Yambol",
    "Business accommodation Yambol",
    "Vacation rental Yambol Bulgaria",
    "Family-friendly apartment Yambol",
    "Monthly apartment rental Yambol",
    "luxury apartment Yambol",
    "smart home Yambol 2024",
    "renovated apartment Yambol",
    "city view apartment Bulgaria",
    "walking zone accommodation",
    "secure parking Yambol center",
    "business ready apartment Yambol",
    "smart TV apartment Bulgaria",
    "high-speed internet Yambol",
    "modern apartment Bulgaria",
    "family friendly Yambol apartment",
    "central Yambol accommodation",
    "premium stay Yambol",
    "executive apartment Bulgaria"
  ],
  openGraph: {
    title: "Luxury 2-Bedroom Apartment in Yambol City Center | The Lindens Bulgaria",
    description: "Modern living in Yambol's prime location. 2024 renovated apartment with smart features, city views, and secure parking. Perfect for business and leisure stays.",
    url: "https://lindens.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://lindens.vercel.app/DSC_2415.JPG",
        alt: "Luxury Downtown Apartment By the Lindens - Modern Living in Yambol",
        width: 1200,
        height: 630
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Apartment in Yambol City Center | The Lindens",
    description: "Experience premium living in our 2024-renovated apartment. Smart amenities, city views, and prime location in Yambol's walking zone.",
    images: ["https://lindens.vercel.app/DSC_2415.JPG"],
  },
  alternates: {
    canonical: "https://lindens.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "myc07DZGy27xd7VSuCNEWEsIBMzDlP1XHGYDP_t82eY"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KR8XWB26');`,
          }}
        ></script>
        {/* End Google Tag Manager */}

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4ECW6RS4YG"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                     function gtag(){dataLayer.push(arguments);}
                     gtag('js', new Date());
                     gtag('config', 'G-4ECW6RS4YG');`,
          }}
        ></script>
        {/* End Google Analytics */}

        <meta name="google-site-verification" content="myc07DZGy27xd7VSuCNEWEsIBMzDlP1XHGYDP_t82eY" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager NoScript Fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KR8XWB26"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
