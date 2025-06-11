import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-brown-100 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        <div>
          <h2 className="text-lg font-semibold">House of Angklung SF</h2>
          <p className="text-sm mt-2">
            Celebrating Indonesian music & culture in the Bay Area.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Explore</h2>
          <ul className="text-sm mt-2 space-y-1">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/events" className="hover:underline">Events</a></li>
            <li><a href="/learn" className="hover:underline">Learn</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Connect</h2>
          <div className="flex justify-center sm:justify-start mt-3 space-x-4">
            <a href="#" aria-label="Instagram" className="hover:text-white">📸</a>
            <a href="#" aria-label="Facebook" className="hover:text-white">📘</a>
            <a href="#" aria-label="YouTube" className="hover:text-white">▶️</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;