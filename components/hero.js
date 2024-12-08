export default function Hero() {
    return (
        <section
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: "url('/dsc_2394.jpg')" }}
        >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <div className="text-center bg-black bg-opacity-75 px-6 py-8 rounded-md">
                    <h1 className="text-white text-4xl md:text-5xl font-bold">
                        Welcome to Downtown Apartment By The Lindens
                    </h1>
                    <p className="text-white text-lg md:text-xl mt-4">
                    Central Yambol | Fully Equipped 2-Bedroom Apartment for Short Stays
                    </p>
                </div>
            </div>
        </section>
    );
}
