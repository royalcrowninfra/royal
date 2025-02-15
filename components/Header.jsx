'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Phone, Mail, Twitter, Facebook, Instagram, Youtube, Menu, X } from "lucide-react";

const links = [
  { path: "/", name: "Home" },
  {
    path: "#",
    name: "About",
    dropdown: [
      { path: "/about/ourteam", name: "Our Team" },
      { path: "/about/aboutTheGroup", name: "About The Group" },
    ],
  },
  {
    path: "#",
    name: "Projects",
    dropdown: [
      { path: "/projects/ongoingProjects", name: "Ongoing Projects" },
      { path: "/projects/completedProjects", name: "Completed Projects" },
    ],
  },
  { path: "/gallery", name: "Gallery" },
  {
    path: "#",
    name: "Buyers Guide",
    dropdown: [
      { path: "/buyersGuide/panvelDevelopment", name: "Panvel Development" },
      { path: "/buyersGuide/homeLoans", name: "Home Loans" },
      { path: "/buyersGuide/gst", name: "GST" },
      { path: "/buyersGuide/stampDuty&Reg", name: "Stamp Duty & Reg" },
      { path: "/buyersGuide/legal&TaxBenefits", name: "Legal & Tax Benefits" },
      { path: "/buyersGuide/nriGuide", name: "NRI Guide" },
      { path: "/buyersGuide/pmay", name: "PMAY" },
      { path: "/buyersGuide/emiCalculator", name: "EMI Calculator" },
    ],
  },
  { path: "/contact", name: "Contact Us" },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="w-full relative">
      {/* Logo */}
      <div className="absolute left-4 sm:left-1/4 transform sm:-translate-x-40 md:-translate-x-3/4 top-0 z-10">
        <Link href="/">
          <Image
            src="/newLogo.png"
            width={170}
            height={60}
            style={{ objectFit: 'contain' }}
            alt="Royal Crown Realty"
            className="h-28 w-29 sm:h-20 md:h-24 lg:h-32 transition-all duration-300"
            priority
          />
        </Link>
      </div>
      {/* Top bar */}
      <div className="bg-gradient-to-r bg-cyan-700 py-2">
        <div className="container mx-auto px-14 sm:px-14 flex flex-col sm:flex-row justify-end items-end gap-2 sm:gap-12">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-0">
            <span className="text-white text-xs sm:text-sm flex items-center">
              <Phone size={16} className="mr-2" />
              (+91) 8689992777
            </span>
            <span className="text-white text-xs sm:text-sm flex items-center">
              <Mail size={16} className="mr-2" />
              info@royalcrowninfra.com
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <span className="bg-orange-500 text-white text-xs sm:text-sm rounded-full px-2 py-1">RERA ID: A52000011720</span>
            <div className="flex items-center space-x-3">
              <Link href="#" aria-label="Twitter">
                <Twitter size={18} className="text-white" />
              </Link>
              <Link href="https://www.facebook.com/royalcrowninfra/" aria-label="Facebook">
                <Facebook size={18} className="text-white" />
              </Link>
              <Link href="https://www.instagram.com/royalcrown.19/" aria-label="Instagram">
                <Instagram size={18} className="text-white" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Youtube size={18} className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="sm:hidden absolute top-3 right-4 z-50">
        <button onClick={toggleMobileMenu} className="text-black-500 hover:text-gray-600">
          {isMobileMenuOpen ? <X size={34} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Main navigation */}
      <div className="flex items-start justify-center ml-96 py-0 sm:ml-0 sm:py-8 bg-white-100 border-b border-black">
        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex items-center space-x-6 sm:ml-64 lg:gap-8">
          {links.map((item, index) => (
            <div key={item.path} className="relative group">
              <Link
                href={item.path}
                className="text-gray-700 hover:text-teal-500 text-xs lg:text-sm xl:text-base font-black flex items-center"
                onMouseEnter={() => item.dropdown && toggleDropdown(index)}
              >
                {item.name}
                {item.dropdown && <ChevronDown size={16} className="ml-1" />}
              </Link>
              {item.dropdown && (
                <div
                  className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ${openDropdown === index ? 'block' : 'hidden'
                    } transition-all duration-300 z-50`}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.path}
                      href={subItem.path}
                      className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 pl-4 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} sm:hidden`}
        style={{ transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out' }}
      >
        {/* Logo */}
        <div className="absolute left-4 top-4 z-10">
          <Link href="/">
            <Image
              src="/images/header/logoPngwhite2.png"
              width={140}
              height={60}
              alt="Royal Crown Realty"
              className="h-30 w-30 sm:h-20 md:h-24 lg:h-32 transition-all duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Menu Links */}
        <div className="p-4 pt-44">
          {links.map((item, index) => (
            <div key={item.path} className="py-2 group">
              <Link
                href={item.path}
                className="text-gray-700 hover:text-teal-500 text-sm font-medium block transition-colors duration-200 ease-in-out"
                onClick={() => item.dropdown && toggleDropdown(index)}
              >
                {item.name}
                {item.dropdown && <ChevronDown size={16} className="ml-1 inline-block" />}
              </Link>
              {item.dropdown && openDropdown === index && (
                <div className="ml-4 mt-2 space-y-2 transition-opacity duration-300 ease-in-out">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.path}
                      href={subItem.path}
                      className="block text-gray-600 hover:text-teal-500 text-sm transition-colors duration-200 ease-in-out"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
export default Navbar;