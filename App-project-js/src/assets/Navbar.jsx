// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Profile from '../images/avatar.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 border-b border-gray-600">
      <div className="container flex justify-between mx-auto">
        <div className="text-lg font-bold uppercase md:text-xl lg:text-2xl xl:text-3xl">
          Logo
        </div>

        {/* Links */}
        <div className="hidden space-x-6 md:flex">
          <a href="/" className="block px-4 py-2">
            Home
          </a>
          <a href="/" className="block px-4 py-2">
            About
          </a>

          <Avatar>
            <AvatarImage src={Profile} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 z-10 w-full bg-white border-b border-gray-800 top-16 md:hidden">
          <div className="flex flex-col items-center p-4 space-y-4">
            <a href="/" className="block px-4 py-2">
              Home
            </a>
            <a href="/" className="block px-4 py-2">
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
