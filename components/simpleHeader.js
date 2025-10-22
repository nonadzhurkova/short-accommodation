import Link from "next/link";

export default function SimpleHeader() {
  return (
    <header className="bg-black shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.webp"
              alt="Logo"
              className="h-10 w-10 rounded-full border-2 border-white shadow"
            />
            <h1 className="text-xl md:text-2xl font-bold text-white whitespace-nowrap drop-shadow-lg">
              Downtown Apartment
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
