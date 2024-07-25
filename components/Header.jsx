"use client";
import Logo from "./Logo";
import Nav from "./Nav";
import Mobilenavigation from "./Mobilenavigation";
import ThemeToggler from "./ThemeToggler";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isMounted === false) return null;

  return (
    <header
      className={`px-6 w-full flex justify-between items-center sticky top-0 z-30 transition-all  ${
        header
          ? "bg-gradient-to-r from-white-100 to-white-200 shadow-lg dark:bg-accent"
          : "dark:bg-transparent"
      } ${pathname === "/" && "bg-[#fff]"}`}
    >
      <Link href='/' className='flex items-center space-x-2'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Logo className='h-full w-full' />
        </motion.div>
      </Link>

      <div className='h-24 py-6 flex items-center justify-between w-full max-w-screen-xl px-6'>
        <Nav
          containerStyles='hidden xl:flex gap-x-8 items-center flex-grow justify-center'
          linkStyles='relative hover:text-primary transition-all'
          underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
        />
      </div>
    </header>
  );
};

export default Header;
