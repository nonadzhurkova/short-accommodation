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
        <meta name="description" content="Stay comfortably at our cozy apartment test." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="myc07DZGy27xd7VSuCNEWEsIBMzDlP1XHGYDP_t82eY" />

          
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
            title="Comfortable Two-Bedroom Apartment"
            subtitle="Relax in our spacious two-bedroom apartment, each featuring large and cozy double beds for a restful stay. Perfect for families, friends, or business travelers seeking comfort and convenience."
            backgroundImage="/DSC_2369.JPG"
        />
        <Contact />
       <Features />
       {/* Contact Section */}

       <Hero
            title="Monthly Stays Available"
            subtitle="Enjoy the comfort of Downtown Apartment By The Lindens for 28+ nights at discounted rates. Ideal for extended vacations or work stays."
            backgroundImage="/DSC_2409.JPG"
        />
        
           <Location />
           <Contact />
       <Gallery />
        {/* Features Section */}
        
      

     
        <Contact />
      </main>
    </>
  );
}
