import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                   
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h3 className="text-lg font-bold mb-2">Downtown Apartment By The Lindens</h3>
                        <p className="text-gray-600">Yambol, Bulgaria, Targovska street</p>
                       
                    </div>
                
                    {/* Center Section: Social and Booking Links */}
                    <div className="flex space-x-6 text-center">
                        <Link
                            href="https://www.booking.com/hotel/bg/downtown-apartment-by-the-lindens.en-gb.html" // Replace with your Booking.com link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-500 transition"
                        >
                            <img
                                src="/1591871_booking_hotel_social_icon.png" // Replace with your Booking.com logo or icon
                                alt="Booking.com"
                                className="h-8"
                            />
                        </Link>
                        <Link
                            href="https://www.airbnb.com/h/yambolcentral" // Replace with your Airbnb link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-500 transition"
                        >
                            <img
                                src="/11120556_fi_brands_airbnb_icon.png" // Replace with your Airbnb logo or icon
                                alt="Airbnb"
                                className="h-8"
                            />
                        </Link>
                        <Link
                            href="https://www.facebook.com/people/Downtown-Apartment-By-the-Lindens/61568878130922/" // Replace with your Facebook link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-500 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-gray-600 hover:text-indigo-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 12.07C22 5.7 17.5 1 12 1S2 5.7 2 12.07C2 17.1 5.66 21.1 10.44 22v-7h-3v-3h3v-2.4c0-2.95 1.7-4.5 4.26-4.5 1.22 0 2.48.2 2.48.2v2.6h-1.4c-1.38 0-1.82.85-1.82 1.72V12h3.1l-.5 3h-2.6v7c4.78-.89 8.44-4.89 8.44-9.93z" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Section: Copyright */}
                    <div className="text-center md:text-right mt-6 md:mt-0">
                        <p className="text-gray-600">
                            &copy; 2024 Downtown Apartment. All rights reserved. <br/>
                            <Link href="/privacy-policy" className="underline hover:text-indigo-500">
                                Privacy Policy
                            </Link>{" "}
                            |{" "}
                            <Link href="/cookie-policy" className="underline hover:text-indigo-500">
                                Cookie Policy
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
