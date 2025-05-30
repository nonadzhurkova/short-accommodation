"use client";

import { useState } from "react";

const images = [
    "/DSC_2342.JPG",
    "/DSC_2346.JPG",
    "/DSC_2349.JPG",
    "/DSC_2349_01.JPG",
    "/DSC_2349_03.JPG",
    "/DSC_2350.JPG",
    "/DSC_2351.JPG",
    "/DSC_2352.JPG",
    "/DSC_2354.JPG",
    "/DSC_2355.JPG",
    "/DSC_2355_01.JPG",
    "/DSC_2358.JPG",
    "/DSC_2362.JPG",
    "/DSC_2362_01.JPG",
    "/DSC_2363.JPG",
    "/DSC_2368.JPG",
    "/DSC_2369.JPG",
    "/DSC_2370.JPG",
    "/DSC_2371.JPG",
    "/DSC_2376.JPG",
    "/DSC_2377.JPG",
    "/DSC_2386.JPG",
    "/DSC_2389.JPG",
    "/DSC_2391.JPG",
    "/DSC_2392.JPG",
    "/DSC_2394.JPG",
    "/DSC_2395.JPG",
    "/DSC_2397.JPG",
    "/DSC_2409.JPG",
    "/DSC_2412.JPG",
    "/DSC_2415.JPG",
    "/DSC_2419.JPG",
    "/DSC_2420.JPG",
    "/DSC_2421.JPG",
    "/DSC_2422.JPG",
    "/DSC_2425.JPG",
    "/DSC_2428.JPG",
    "/DSC_2430.JPG",
    "/DSC_2431.JPG",
    "/apartment.JPG", // Include the apartment image
];

export default function Gallery() {
    const [visibleImages, setVisibleImages] = useState(6);
    const [selectedImage, setSelectedImage] = useState(null);

    const loadMoreImages = () => {
        setVisibleImages((prev) => Math.min(prev + 6, images.length)); // Load 6 more images
    };

    return (
        <section id="gallery" className="py-16 px-6 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.slice(0, visibleImages).map((src, index) => (
                        <div
                            key={index}
                            className="relative cursor-pointer"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-48 object-cover rounded-lg shadow-md"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleImages < images.length && (
                    <div className="text-center mt-8">
                        <button
                            className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow hover:bg-indigo-700 transition"
                            onClick={loadMoreImages}
                        >
                            Load More
                        </button>
                    </div>
                )}

                {/* Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-4xl mx-auto">
                            <img
                                src={selectedImage}
                                alt="Selected Image"
                                className="w-full h-auto rounded-lg"
                            />
                            <button
                                className="absolute top-4 right-4 text-white text-2xl font-bold"
                                onClick={() => setSelectedImage(null)}
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
