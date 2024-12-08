import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
                <p className="text-gray-700 leading-relaxed mb-4">
                    This Privacy Policy outlines how we collect, use, and protect your personal
                    data in compliance with the General Data Protection Regulation (GDPR).
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-3">1. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    We may collect the following types of personal data:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
                    <li>
                        <strong>Contact Details:</strong> Name, email address, phone number (e.g., for inquiries
                        or reservations).
                    </li>
                    <li>
                        <strong>Cookies and Analytics:</strong> Information about your device, browsing
                        behavior, and interactions with our website.
                    </li>
                </ul>

                <h2 className="text-xl font-bold text-gray-800 mb-3">2. How We Use Your Data</h2>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
                    <li>To respond to inquiries or process reservation requests.</li>
                    <li>To improve website functionality and user experience.</li>
                    <li>To comply with legal obligations and protect our rights.</li>
                </ul>

                <h2 className="text-xl font-bold text-gray-800 mb-3">3. Sharing Your Data</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    We do not sell or share your personal data with third parties, except when required by law
                    or to fulfill a service (e.g., payment processing).
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-3">4. Your Rights</h2>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
                    <li>The right to access, update, or delete your personal data.</li>
                    <li>The right to withdraw consent to data processing.</li>
                    <li>The right to lodge a complaint with a supervisory authority.</li>
                </ul>

                <h2 className="text-xl font-bold text-gray-800 mb-3">5. Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    We use cookies to improve your experience on our website. For more information, please
                    refer to our <Link href="/cookie-policy" className="text-indigo-600 underline">Cookie Policy</Link>.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-3">6. Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    We may update this Privacy Policy periodically. Please review it to stay informed about how
                    we are protecting your data.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at
                    <strong> info@yourapartment.com</strong>.
                </p>
            </div>
        </section>
    );
}
