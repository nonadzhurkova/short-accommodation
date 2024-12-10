import Link from "next/link";

const phoneNumber = "359889721548"; // Add your phone number
const whatsappLink = `https://wa.me/${phoneNumber}`;

export default function Contact() {
  return (
      <section id="contact" className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                  Ready to book your stay? You can find us on Booking.com, Airbnb, or send us a message on our Facebook page.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                  {/* Booking.com Button */}
                  <Link
                      href="https://www.booking.com/hotel/bg/downtown-apartment-by-the-lindens.en-gb.html" // Replace with your Booking.com link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition"
                  >
                      Book on Booking.com
                  </Link>

                  {/* Airbnb Button */}
                  <Link
                      href="https://www.airbnb.com/h/yambolcentral" // Replace with your Airbnb link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow hover:bg-red-700 transition"
                  >
                      Book on Airbnb
                  </Link>

                  {/* Facebook Button */}
                  <Link
                      href="https://www.facebook.com/people/Downtown-Apartment-By-the-Lindens/61568878130922/" // Replace with your Facebook page link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-800 text-white font-bold rounded-lg shadow hover:bg-blue-900 transition"
                  >
                      Message on Facebook
                  </Link>
                  <Link
                      href={whatsappLink} // Replace with your WhatsApp number, e.g., 1234567890
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow hover:bg-green-600 transition"
                  >
                      Chat on WhatsApp
                  </Link>
              </div>
          </div>
      </section>
  );
}
