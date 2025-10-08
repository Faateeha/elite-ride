"use client";

import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/");
  };

  const getInitials = (name: string) => {
    const names = name.split(" ");
    const initials = names.map((n) => n[0]).join("");
    return initials.toUpperCase();
  };

  return (
    <nav className=" top-0 left-0 w-full backdrop-blur-xs  z-50">
      <div className="container mx-auto px-4  flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.PNG"
            alt="Elite logo"
            width={100}
            height={75}
          />
        </Link>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link href="/" className="  hover:text-red-800 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className=" hover:text-red-800 hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className=" hover:text-red-800 hover:underline">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/services" className=" hover:text-red-800 hover:underline">
              Services
            </Link>
          </li>

          {/* Auth section */}
          {user ? (
            <div className="relative group">
              <button className="w-8 h-8 rounded-full bg-red-800 text-white flex items-center justify-center font-semibold">
                {getInitials(user.displayName || "U")}
              </button>
              <div className="absolute right-0 hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-32">
                <Link
                  href="/user"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  My Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link
                href="/signin"
                className="border-2 border-red-800 text-red-700 px-4 py-2 rounded-3xl mx-1 hover:bg-red-700 hover:text-white transition"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="border-2 border-red-800 bg-red-800 text-white px-4 py-2 rounded-3xl mx-1 hover:bg-white hover:text-red-800 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </ul>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-transparent shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4 text-white">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className=""
                onClick={() => setIsOpen(false)}
              >
                services
              </Link>
            </li>
            {user ? (
              <div className="text-center">
                <Link
                  href="/user"
                  className="block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  My Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-red-600 py-2"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="border-2 border-red-800 text-red-800 px-4 py-2 rounded-3xl m-1"
                  onClick={() => setIsOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="border-2 border-red-800 bg-red-800 text-white px-4 py-2 rounded-3xl m-1"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
