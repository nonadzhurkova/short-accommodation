"use client";

export default function Hero({ title, subtitle, backgroundImage }) {
    return (
        <section
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <div className="text-center bg-black bg-opacity-75 px-6 py-8 rounded-md">
                    <h1 className="text-white text-4xl md:text-5xl font-bold">
                        {title}
                    </h1>
                    <p className="text-white text-lg md:text-xl mt-4">
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    );
}
