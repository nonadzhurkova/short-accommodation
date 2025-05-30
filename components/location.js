import Link from "next/link";

export default function Location() {
    return (
        <section id="location" className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Text Description */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-indigo-600">Located in Yambol, Bulgaria</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Situated in the heart of Yambol&apos;s vibrant walking zone, our apartment offers unparalleled access to the city&apos;s top attractions, restaurants, and cafes. Whether you&apos;re here for leisure or business, our central location ensures convenience and a memorable stay.
                    </p>
                    
                    {/* Directions Button */}
                    <Link
                        href="https://maps.app.goo.gl/SscPr935xNqMKs9JA" // Replace with your latitude and longitude
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white font-bold text-lg rounded-lg shadow hover:bg-indigo-700 transition"
                    >
                        Get Directions
                    </Link>
                </div>
    
                {/* Google Maps Image */}
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                        src="/map.png" // Replace with your image path
                        alt="Google Maps Location"
                        className="w-full h-64 object-cover"
                    />
                </div>
            </div>
        </div>
    </section>
    
    );
}