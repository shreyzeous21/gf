"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "About", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white  sticky top-0 z-10">
      <div className="container mx-auto max-w-4xl flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-green-500 text-2xl font-bold">
            <Image src={"/GF-logo.png"} width={100} height={100} alt="logo"/>
        </div>

        {/* Hamburger Menu */}
        <motion.div
          className="flex"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
        >
          <button className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-4 right-4 text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Links */}
            <nav className="flex-col gap-4 flex justify-center items-center uppercase">
              {menuItems.map(({ name, path }) => (
                <motion.a
                  key={path}
                  href={path}
                  className={`text-2xl ${
                    router.pathname === path
                      ? "text-green-500 font-semibold"
                      : "text-gray-800"
                  }`}
                  whileHover={{
                    scale: 1.1,
                    color: "#22C55E", // Green color
                    transition: { duration: 0.3 },
                  }}
                >
                  {name}
                </motion.a>
              ))}
            </nav>

            {/* Social Media Icons */}
            <div className="flex gap-6 mt-8">
              {[
                { icon: FaFacebook, link: "#" },
                { icon: FaTwitter, link: "#" },
                { icon: FaInstagram, link: "#" },
                { icon: FaLinkedin, link: "#" },
              ].map(({ icon: Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  className="text-gray-800"
                  whileHover={{ scale: 1.2, color: "#22C55E" }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
