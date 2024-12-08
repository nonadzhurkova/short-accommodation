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
        <Hero
            title="Welcome to Downtown Apartment By The Lindens"
            subtitle="Central Yambol | Fully Equipped 2-Bedroom Apartment for Short Stays"
            backgroundImage="/DSC_2415.JPG"
        />

        {/* About Section */}
       <About />
       <Hero
            title="Two bedroom apartment"
            subtitle="With large double beds"
            backgroundImage="/DSC_2369.JPG"
        />
       <Features />
       {/* Contact Section */}

       <Hero
            title="Fully equipped kitchen"
            subtitle=""
            backgroundImage="/DSC_2409.JPG"
        />
           <Location />
       <Gallery />
        {/* Features Section */}
        
      

     
        <Contact />
      </main>
    </>
  );
}
