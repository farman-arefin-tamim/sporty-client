import Link from "next/link";
import { MdSportsSoccer, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";


const publicLinks = [
    { label: "Home", href: "/" },
    { label: "All Facilities", href: "/facilities" },
];

const privateLinks = [
    { label: "My Bookings", href: "/my-bookings" },
    { label: "Add Facility", href: "/add-facility" },
    { label: "Manage My Facilities", href: "/manage-facilities" },
];


const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", Icon: FaFacebookF },
  { label: "X", href: "https://x.com", Icon: FaXTwitter },
  { label: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: FaLinkedinIn },
];

export default function Footer() {
  return (
    <footer className="border-t border-separator bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        
        <div>
          <Link href="/" className="flex items-center gap-2">
            <MdSportsSoccer className="h-7 w-7 text-accent" />
            <span className="text-xl font-bold">Sporty</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted">
            Find your nearest turf, court or pool and lock in your game time in
            just a few clicks.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-separator transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        
        <div>
          <h3 className="text-base font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {[...publicLinks, ...privateLinks].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        
        <div>
          <h3 className="text-base font-semibold">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-center gap-2">
              <MdLocationOn className="h-5 w-5 shrink-0 text-accent" />
              Maijdee, Noakhali, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="h-5 w-5 shrink-0 text-accent" />
              +880 1700-000000
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="h-5 w-5 shrink-0 text-accent" />
              support@sporty.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-separator py-4 text-center text-sm text-muted">
        © {new Date().getFullYear()} Sporty. All rights reserved.
      </div>
    </footer>
  );
}