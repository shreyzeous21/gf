"use client"
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const footerLinks = [
  { name: "About", href: "#" },
  { name: "Work", href: "#" },
  { name: "Case Studies", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Contact", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-black p-3 w-full bottom-0">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Footer Links */}
        <ul className="flex flex-wrap items-center mt-3 text-xs font-medium text-gray-100 sm:mt-0 uppercase">
          {footerLinks.map((link, index) => (
            <motion.li
              key={index}
              className="me-4 md:me-6 mb-2 md:mb-0"
              whileHover={{ scale: 1.05 }}
            >
              <a href={link.href} className="hover:ease-linear">
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Footer Text */}
        <span className="text-xs text-white sm:text-center mt-4 md:mt-0">
          All Rights Reserved{" "}
          <Link href="/" className="hover:underline">
            Green Factor
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
