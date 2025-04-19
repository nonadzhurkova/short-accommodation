import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CookieBanner from "../components/cookie";
import { Analytics } from "@vercel/analytics/react"

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
  title: "Downtown Apartment By the Lindens | Short Stay in Yambol, Bulgaria",
  
  description:
    "Stay at Downtown Apartment By the Lindens in Yambol, Bulgaria. A modern 2-bedroom apartment located in the city center. Perfect for short stays, families, and business travelers. Book now!",
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
    "Monthly apartment rental Yambol"
  ],
  openGraph: {
    title: "Downtown Apartment By the Lindens | Short Stay in Yambol, Bulgaria",
    description:
      "Discover our cozy, modern 2-bedroom apartment in the heart of Yambol, Bulgaria. Perfect for short-term stays and close to top attractions. Book your stay today!",
    url: "https://lindens.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://lindens.vercel.app/DSC_2415.JPG", // Replace with a real image URL
        alt: "Downtown Apartment By the Lindens in Yambol, Bulgaria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Downtown Apartment By the Lindens",
    description:
      "Stay at a modern, centrally located 2-bedroom apartment in Yambol, Bulgaria. Ideal for short-term rentals. Book now!",
    images: ["https://lindens.vercel.app/DSC_2415.JPG"], // Replace with a real image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
