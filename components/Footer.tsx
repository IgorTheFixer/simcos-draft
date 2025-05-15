'use client'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Footer = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <footer className={clsx('border-t', isHomePage ? 'text-white' : 'text-black')}>
      <div className="mx-auto py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Simco's Mattapan</p>
          <p className="text-sm">1509 Blue Hill Ave</p>
          <p className="text-sm"> Mattapan, MA 02126</p>
          <p className="text-sm mt-2">Phone: (617) 296-3800</p>
          {/* <p className="text-sm">Email: contact@cozyspoon.com</p> */}
        </div>

        {/* Hours of Operation */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Hours of Operation</h3>
          <ul className="text-sm">
            <li>Sun – Sat: 9:30 AM – 1:00 AM</li>
          </ul>
        </div>

      </div>
        <p className={clsx('text-center text-xs', isHomePage ? 'text-white' : 'text-black')}>
          &copy; Simcos
        </p>
      </div>
    </footer>
  )
};

export default Footer;