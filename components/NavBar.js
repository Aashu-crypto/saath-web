"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-20 shadow-lg transition-opacity  font-DreamBold text-2xl duration-300 p-3 ${
        scrollY > 0 ? "bg-white/70" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center p-4 px-12">
        <a href="/" className="flex gap-2 items-center tracking-wide">
          Saathi
        </a>

        <div className={`${open ? "block" : "hidden"} md:flex`}>
          <ul className="flex flex-col md:flex-row md:gap-8 absolute top-16 right-5 md:static bg-white md:bg-transparent">
            {["Home", "About Us", "Services", "Contact Us"].map(
              (item, index) => (
                <li key={index} className="md:hover:underline">
                  <a
                    href={`#${item.replace(" ", "").toLowerCase()}`}
                    className="cursor-pointer text-base font-medium text-textPrimary hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* <div className="flex items-center">
          <a
            href="tel:+18001234567" // Replace with the actual phone number
            className="text-white flex items-center justify-center p-2 text-base hover:bg-primary-dark bg-primary rounded-md mr-2"
          >
            <FaPhoneAlt className="mr-1" />
            Call Us
          </a>
          <button
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </nav>
  );
}

export default NavBar;
