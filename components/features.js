export default function Features() {
  return (
      <section id="features" className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Feature 1: Free WiFi */}
                  <div className="p-6 bg-white shadow rounded-lg text-center">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-indigo-600 mx-auto mb-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8.29 16.29a1 1 0 011.42 0l1.3 1.3a1 1 0 001.42 0l1.3-1.3a1 1 0 011.42 0l1.3 1.3m-6.6-3.3a4.5 4.5 0 016.36 0M5.05 12.05a9 9 0 0113.9 0M3 9a12 12 0 0118 0"
                          />
                      </svg>
                      <h3 className="text-xl font-bold mb-2">Free WiFi</h3>
                      <p className="text-gray-600">
                          Stay connected during your stay with high-speed internet.
                      </p>
                  </div>

                  {/* Feature 2: Air Conditioning */}
                  <div className="p-6 bg-white shadow rounded-lg text-center">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-indigo-600 mx-auto mb-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zM8 16h8a4 4 0 110 8H8a4 4 0 110-8z"
                          />
                      </svg>
                      <h3 className="text-xl font-bold mb-2">Air Conditioning</h3>
                      <p className="text-gray-600">
                          Enjoy year-round comfort with air conditioning and heating in every room.
                      </p>
                  </div>

                  {/* Feature 3: Smart TV */}
                  <div className="p-6 bg-white shadow rounded-lg text-center">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-indigo-600 mx-auto mb-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.5 5.5h19v13h-19v-13zm0 13v1.5h19v-1.5"
                          />
                      </svg>
                      <h3 className="text-xl font-bold mb-2">Smart TV</h3>
                      <p className="text-gray-600">
                          Relax with a Smart TV for your favorite entertainment.
                      </p>
                  </div>

                  {/* Feature 4: Balcony with a View */}
                  <div className="p-6 bg-white shadow rounded-lg text-center">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-indigo-600 mx-auto mb-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0v7"
                          />
                      </svg>
                      <h3 className="text-xl font-bold mb-2">Balcony with a View</h3>
                      <p className="text-gray-600">
                          Enjoy stunning city views from your private balcony.
                      </p>
                  </div>

                  {/* Feature 5: Self Check-In */}
                  <div className="p-6 bg-white shadow rounded-lg text-center">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-indigo-600 mx-auto mb-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 2H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
                          />
                      </svg>
                      <h3 className="text-xl font-bold mb-2">Self Check-In</h3>
                      <p className="text-gray-600">
                          Enjoy flexible arrivals with self check-in using a smart lock or lockbox.
                      </p>
                  </div>

                  {/* Feature 6: Laundry Facilities */}
                  <div className="p-6 bg-white shadow rounded-lg text-center">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-indigo-600 mx-auto mb-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 16v1a2 2 0 104 0v-1a2 2 0 104 0v-1a2 2 0 104 0v-1"
                          />
                      </svg>
                      <h3 className="text-xl font-bold mb-2">Laundry Facilities</h3>
                      <p className="text-gray-600">
                          Keep your clothes fresh with a washer, dryer, and complimentary detergent.
                      </p>
                  </div>

                  {/* Feature 7: Fully Equipped Kitchen */}
                  <div className="p-6 bg-white shadow rounded-lg text-center">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-indigo-600 mx-auto mb-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16m0 6H4"
                          />
                      </svg>
                      <h3 className="text-xl font-bold mb-2">Fully Equipped Kitchen</h3>
                      <p className="text-gray-600">
                          Enjoy a kitchen with a refrigerator, oven, microwave, and utensils.
                      </p>
                  </div>

                  {/* Feature 8: Complimentary Toiletries */}
                  <div className="p-6 bg-white shadow rounded-lg text-center">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-indigo-600 mx-auto mb-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 12h8m-8 4h4"
                          />
                      </svg>
                      <h3 className="text-xl font-bold mb-2">Complimentary Toiletries</h3>
                      <p className="text-gray-600">
                          Travel light with free toiletries, including shampoo and body wash.
                      </p>
                  </div>

                  {/* Feature: Location */}
                  <div className="p-6 bg-white shadow rounded-lg text-center">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-indigo-600 mx-auto mb-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0v7"
                          />
                      </svg>
                      <h3 className="text-xl font-bold mb-2">Prime Location</h3>
                      <p className="text-gray-600">
                          Located in the heart of Yambol, Bulgaria, enjoy the city walking zone, 
                          nearby attractions, and a peaceful car-free environment.
                      </p>
                  </div>

              </div>
          </div>
      </section>
  );
}
