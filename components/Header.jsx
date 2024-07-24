"use client";
import Logo from "./Logo";
import Nav from "./Nav";
import Mobilenavigation from "./Mobilenavigation";
import ThemeToggler from "./ThemeToggler";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
      className={`p-6 sticky top-0 z-30 transition-all  ${
        header
          ? "bg-gradient-to-r from-white-100 to-white-200 shadow-lg dark:bg-accent"
          : "dark:bg-transparent"
      } ${pathname === "/" && "bg-[#fff]"}`}
    >
      <div className='container mx-auto h-16 flex items-center justify-center'>
        <div className='flex items-center justify-between w-full max-w-screen-xl px-6'>
          {/* Logo Section */}
          {/* <div className='flex-shrink-0'>
            <Logo />
          </div> */}

          {/* Navigation Section */}
          <Nav
            containerStyles='hidden xl:flex gap-x-8 items-center flex-grow justify-center'
            linkStyles='relative hover:text-primary transition-all'
            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
          />

          {/* Mobile Navigation */}
          {/* <div className='xl:hidden'>
            <Mobilenavigation />
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
