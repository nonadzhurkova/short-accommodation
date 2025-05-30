export default function About() {
    return (
        <section id="about" className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    About Our Apartment
                </h2>

                {/* Intro Section */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-12">
                    <p className="text-gray-700 text-lg leading-relaxed text-center">
                        Welcome to our modern 2-bedroom apartment, located in the heart of Yambol&apos;s vibrant walking zone. Recently renovated in the summer of 2024, this stylish and cozy space is perfect for up to 4 guests. Whether you&apos;re visiting with family, friends, or for business, our apartment offers a blend of comfort and convenience that makes your stay unforgettable.
                    </p>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* The Space */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex justify-center mb-4">
                            {/* Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-indigo-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 10l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V10z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-center text-gray-800 mb-3">
                            The Space
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            - 2 comfortable double bedrooms with fresh linens and towels.<br />
                            - Open-plan living room with cozy seating, flat-screen TV, and dining area.<br />
                            - Fully equipped kitchen and glass wall with city views.
                        </p>
                    </div>

                    {/* Amenities */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex justify-center mb-4">
                            {/* Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-indigo-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 10l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V10z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-center text-gray-800 mb-3">
                            Amenities
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            - High-speed WiFi and interactive TV.<br />
                            - Free parking behind the building.<br />
                            - Steps away from top attractions, cafes, and restaurants.
                        </p>
                    </div>

                    {/* Location */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex justify-center mb-4">
                            {/* Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-indigo-600"
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
                        </div>
                        <h3 className="text-xl font-bold text-center text-gray-800 mb-3">
                            Prime Location
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Located in Yambol&apos;s central walking zone, enjoy a car-free environment, easy access to public transport, and proximity to restaurants, shops, and attractions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
