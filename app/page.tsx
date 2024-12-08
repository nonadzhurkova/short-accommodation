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
        {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KR8XWB26');`,
                    }}
                ></script>
                {/* End Google Tag Manager */}
          
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
        <Contact />
       <Features />
       {/* Contact Section */}

       <Hero
            title="Fully Equipped Kitchen"
            subtitle=""
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
