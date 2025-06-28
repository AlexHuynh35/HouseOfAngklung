import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-brown-100 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-9 text-center">
        {/* Title / Organization Info */}
        <div>
          <h2 className="text-lg font-semibold">Saung Angklung of San Francisco</h2>
        </div>

        {/* Navigation Links */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Home */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              <Link href="/" className="hover:underline">Home</Link>
            </h3>
          </div>
          
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              <Link href="/about" className="hover:underline">About</Link>
            </h3>
          </div>

          {/* Events */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              <Link href="/events" className="hover:underline">Events</Link>
            </h3>
          </div>

          {/* Learning: History */}
          <div>
            <h3 className="text-lg font-semibold mb-3">History</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learn/musical_evolution" className="hover:underline">Angklung Evolution</Link>
              </li>
            </ul>
          </div>

          {/* Learning: People */}
          <div>
            <h3 className="text-lg font-semibold mb-3">People</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learn/maestro_sam_udjo" className="hover:underline">Maestro Sam Udjo</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex justify-center space-x-4">
            <Link href="#" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
              <Image
                src="/Facebook.jpg"
                alt="Facebook"
                width={32}
                height={32}
                className="rounded filter invert brightness-0"
              />
            </Link>
            <Link href="#" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
              <Image
                src="/Instagram.jpg"
                alt="Instagram"
                width={32}
                height={32}
                className="rounded filter invert brightness-0"
              />
            </Link>
            <Link href="#" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
              <Image
                src="/Youtube.jpg"
                alt="YouTube"
                width={32}
                height={32}
                className="rounded filter invert brightness-0"
              />
            </Link>
            <Link href="#" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
              <Image
                src="/LinkedIn.jpg"
                alt="LinkedIn"
                width={32}
                height={32}
                className="rounded filter invert brightness-0"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;