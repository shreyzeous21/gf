"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import Link from "./Link";
import Curve from "./Curve";
import Footer from "./Footer";

const navItems = [
  {
    title: "About Us",
    href: "/About",
  },
  {
    title: "Our Work",
    href: "/work",
  },
  {
    title: "Case Studies",
    href: "/caseStudies",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Contact Us",
    href: "/Contact",
  },
];

export default function HomeNav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={`${styles.menu} flex justify-center bg-red text-center leading-none`}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          {/* <div className={styles.header}>
            <p>Navigation</p>
             </div> */}
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <Footer />
        <span className="text-lg md:mt-20 mt-72">
          © {new Date().getFullYear()}{" "}
          <a href="/" className="hover:underline text-green-500 ">
            Green Factor{" "}
          </a>
        </span>
        <span className="text-lg mb-96 gap-2">
          Design & Developed by{" "}
          <a href="/" className="hover:underline text-green-500 ">
            CoderXpoint
          </a>
        </span>
      </div>
      <Curve />
    </motion.div>
  );
}
