'use client';

import Head from 'next/head';
import { useState } from 'react';
import SimpleHeader from '../../components/simpleHeader';

export default function InstructionsEn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Head>
        <title>Check-in Instructions - Downtown Apartment</title>
        <meta name="description" content="Check-in instructions for Downtown Apartment 'By the Lindens'" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="bg-gray-100 min-h-screen">
        <SimpleHeader />
        
        {/* Instructions Content */}
        <section className="pt-20 pb-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Check-in Instructions</h2>
            <div className="space-y-6">
              
              {/* Address Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">1. Address and Location</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Exact address:</strong> Zh.K. Iztok, "Targovska" St. 34, 8600 Yambol, Entrance D, 2nd floor, Apartment 84
                  </p>
                  <p className="text-gray-700 mb-4">
                    You can find the apartment in Google Maps by searching <strong>"Downtown Apartment 'By the Lindens'"</strong> - it will take you to the parking behind the building. The second entrance leads to parking in the back of the building.
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/nTzbcZLWUiTnJjao6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    Directions in Google Maps
                  </a>
                </div>
              </div>

              {/* Entrances Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">2. Entrances and Keys</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Main Entrance (Targovska St.)</h4>
                    <div className="mb-4">
                      <img 
                        src="/entrance1.jpg" 
                        alt="Main entrance on Targovska St." 
                        className="w-full max-w-md mx-auto rounded-lg shadow-md"
                      />
                    </div>
                    <p className="text-gray-700 mb-4">
                      The main entrance is located on "Targovska" street, which is a pedestrian zone.
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/zRD2bcHYKdjTuThK9" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition"
                    >
                      Directions in Google Maps
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Second Entrance (Parking)</h4>
                    <p className="text-gray-700">
                      The second entrance leads to parking in the back of the building.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="text-gray-700">
                      <strong>Important:</strong> Both entrances are locked, and you will receive keys for both the building and the apartment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Parking Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">3. Parking</h3>
                <div className="space-y-4">
                  <div className="mb-4">
                    <img 
                      src="/blue_zone.jpg" 
                      alt="Blue zone parking sign" 
                      className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                    />
                  </div>
                  <p className="text-gray-700">
                    <strong>Blue zone parking:</strong> During working hours (8:00 AM - 6:00 PM), blue zone parking with SMS self-payment is mandatory.
                  </p>
                  <p className="text-gray-700">
                    <strong>SMS self-payment:</strong> Send a short text message (SMS) to number <strong>1346</strong> with the vehicle's license plate number written in Latin letters.
                  </p>
                  <div className="bg-blue-100 p-4 rounded-md">
                    <p className="text-sm text-blue-800">
                      <strong>Important:</strong> The blue zone is active only during working hours from 8:00 AM to 6:00 PM on weekdays.
                    </p>
                  </div>
                </div>
              </div>

              {/* Self Check-in Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">4. Self Check-in</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Key safe:</strong> On the parapet to the right of the main entrance, you will find a key safe.
                  </p>
                  <p className="text-gray-700">
                    <strong>Safe code:</strong> You will receive the code on the day of check-in around 2:00 PM.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="text-gray-700">
                      <strong>Important:</strong> Please close the safe and scramble the code after taking the keys.
                    </p>
                  </div>
                </div>
              </div>

              {/* WiFi and Amenities Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">5. WiFi and Amenities</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">WiFi Details</h4>
                    <div className="bg-gray-100 p-4 rounded-md">
                      <p className="text-gray-700 mb-2">
                        <strong>Network name:</strong> YambolCentral
                      </p>
                      <div className="flex items-center space-x-2">
                        <p className="text-gray-700">
                          <strong>Password:</strong> 
                          {showPassword ? '27179635' : '••••••••'}
                        </p>
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-blue-600 hover:text-blue-800 text-sm underline"
                        >
                          {showPassword ? 'Hide' : 'Show'}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Television</h4>
                    <p className="text-gray-700">
                      <strong>Interactive TV:</strong> Select the DKTV application.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Coffee Machine</h4>
                    <p className="text-gray-700 mb-4">
                      Instructions for using the coffee machine:
                    </p>
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/iAPHd8bvj1Q?si=5wHyE45jmsIB1Lo-"
                        title="Coffee Machine Instructions"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">6. Guest Registration</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Mandatory registration:</strong> We are legally required to register all guests.
                  </p>
                  <p className="text-gray-700">
                    You can send three names and date of birth or fill out the registration cards in the apartment.
                  </p>
                  <div className="bg-blue-100 p-4 rounded-md">
                    <p className="text-gray-700 mb-2">
                      <strong>Online registration:</strong> You can fill out the online form here:
                    </p>
                    <a 
                      href="https://forms.gle/ief6EX7irqQDSDAw8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Fill Online Form
                    </a>
                  </div>
                </div>
              </div>

              {/* Arrival Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">7. Arrival Time</h3>
                <p className="text-gray-700">
                  To ensure a smooth check-in, please notify us of your expected arrival time. 
                  This will help us organize your meeting at the apartment or provide you with self check-in instructions.
                </p>
              </div>

              {/* Checkout Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">8. Check-out</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Apartment check-out:</strong> By 11:00 AM, so we can prepare it for the next guests.
                  </p>
                  <p className="text-gray-700">
                    On the day of departure, you can leave the key in the key safe.
                  </p>
                </div>
              </div>

              {/* Review Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">9. Leave a Review</h3>
                <p className="text-gray-700 mb-4">
                  We would be grateful if you could leave us a review on Google:
                </p>
                <a 
                  href="https://g.page/r/CY9nR2i9l8TNEBM/review" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Leave Google Review
                </a>
              </div>

              {/* Contact Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Need Help?</h3>
                <p className="text-gray-700">
                  If you have any questions or need assistance, please don't hesitate to contact us.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}
