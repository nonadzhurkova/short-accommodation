import Head from "next/head";
import Hero from "../components/hero"
import About from "../components/about"
import Features from "../components/features"
import Contact from "../components/contact"
import Gallery from "../components/gallery"
import Location from "../components/location"

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Apartment - Short-Term Accommodation</title>
        <meta name="description" content="Stay comfortably at our cozy apartment." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
       <Hero />

        {/* About Section */}
       <About />

       <Gallery />
        {/* Features Section */}
        
        <Features />
        {/* Contact Section */}

        <Location />
        <Contact />
      </main>
    </>
  );
}
