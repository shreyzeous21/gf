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
    <header className="bg-gray-100 sticky top-0 z-10">
      <div className="container mx-auto max-w-4xl flex justify-between items-center p-2">
        {/* Logo */}
        <p className="text-2xl mx-4 gap-2 flex font-bold text-gray-400">
          Green <span className="text-black">Factor</span>
        </p>
        <div className="text-green-500 text-2xl font-bold mx-20">
          <div className=" ">
            <Image src={"/GF-logo.png"} width={100} height={50} alt="logo" />
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
