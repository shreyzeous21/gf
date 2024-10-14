"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";

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
      <div className="container mx-auto max-w-4xl flex justify-between items-center p-2">
        {/* Logo */}
        <div className="text-green-500 text-2xl font-bold">
          <Image src={"/GF-logo.png"} width={100} height={50} alt="logo" />
        </div>

        {/* Hamburger Menu */}
        {/* <motion.div
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
        </motion.div> */}
        <Sidebar />
      </div>

      {/* Fullscreen Menu Overlay */}

    </header>
  );
};

export default Header;
