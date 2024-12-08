"use client";
import Link from "next/link";

import { useState, useEffect } from "react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already accepted cookies
        const cookieConsent = localStorage.getItem("cookieConsent");
        if (!cookieConsent) {
            setIsVisible(true); // Show the banner if consent is not stored
        }
    }, []);

    const handleAccept = () => {
        // Store the user's consent in localStorage
        localStorage.setItem("cookieConsent", "true");
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-4 px-6 z-50">
                <p className="text-sm">
                    This website uses cookies to enhance your browsing experience. By continuing to use this site, you agree to our use of cookies.{" "}
                    <Link href="/privacy-policy" className="underline">
                        Learn more
                    </Link>.
                </p>
                <div className="mt-2 flex justify-end">
                    <button
                        className="bg-indigo-600 px-4 py-2 text-sm font-bold rounded hover:bg-indigo-700 transition"
                        onClick={handleAccept}
                    >
                        Accept
                    </button>
                </div>
            </div>
        )
    );
}
