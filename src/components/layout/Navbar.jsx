"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { MdSportsSoccer } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { useAuth } from "@/hooks/useAuth";
import ProfileDropdown from "./ProfileDropdown";


const publicLinks = [
    { label: "Home", href: "/" },
    { label: "All Facilities", href: "/facilities" },
];

const privateLinks = [
    { label: "My Bookings", href: "/my-bookings" },
    { label: "Add Facility", href: "/add-facility" },
    { label: "Manage My Facilities", href: "/manage-facilities" },
];


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, isPending, signOut } = useAuth();

  const links = user ? [...publicLinks, ...privateLinks] : publicLinks;

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const handleLogout = async () => {
    await signOut();
    setIsMenuOpen(false);
    router.push("/");
  };

  const linkClass = (href) =>
    `text-sm transition-colors hover:text-accent ${
      isActive(href) ? "font-semibold text-accent" : "text-foreground"
    }`;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
       
        <Link href="/" className="flex items-center gap-2">
          <MdSportsSoccer className="h-7 w-7 text-accent" />
          <span className="text-xl font-bold">Sporty</span>
        </Link>

       
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={linkClass(link.href)}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

      
        <div className="flex items-center gap-3">
          {isPending ? (
            <div className="h-10 w-10 animate-pulse rounded-full bg-default" />
          ) : user ? (
            <ProfileDropdown user={user} onLogout={handleLogout} />
          ) : (
            <Button onPress={() => router.push("/login")}>Login</Button>
          )}

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      
      {isMenuOpen && (
        <div className="border-t border-separator lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 ${linkClass(link.href)}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}