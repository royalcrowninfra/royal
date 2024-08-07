'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Phone, Mail, Twitter, Facebook, Instagram, Youtube, Menu, X } from "lucide-react";

const links = [
  { path: "/", name: "Home" },
  {
    path: "/",
    name: "About",
    dropdown: [
      { path: "/about/ourteam", name: "Our Team" },
      { path: "/about/aboutTheGroup", name: "About The Group" },
      // { path: "/about/visionAndMission", name: "Vision And Mission" },
      // { path: "/about/philosophy", name: "Philosophy" },
      // { path: "/about/values", name: "Values" },
    ],
  },
  // { path: "/our-team", name: "Our Team" },
  {
    path: "/",
    name: "Projects",
    dropdown: [
      { path: "/projects/ongoingProjects", name: "Ongoing Projects" },
      { path: "/projects/completedProjects", name: "Completed Projects" },
    ],
  },
  { path: "/gallery", name: "Gallery" },
  { path: "/book-site-visit", name: "Book a Site Visit" },
  {
    path: "/",
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

  return (
    <header className="w-full relative">
      {/* Logo */}
      <div className="absolute left-4 sm:left-1/4 transform sm:-translate-x-1/2 top-0 z-10">
        <Link href="/">
          <Image
            src="/images/header/my-image.png"
            width={140}
            height={60}
            alt="Royal Crown Realty"
            className="h-16 w-auto sm:h-20 md:h-24 lg:h-32 transition-all duration-300"
          />
        </Link>
      </div>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-orange-200 via-cyan-500 to-purple-200 py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-end items-center gap-2 sm:gap-12">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-0">
            <span className="text-white text-xs sm:text-sm flex items-center">
              <Phone size={16} className="mr-2" />
              (+1) 212-946-2707
            </span>
            <span className="text-white text-xs sm:text-sm flex items-center">
              <Mail size={16} className="mr-2" />
              info@royalcrown.com
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <span className="bg-orange-500 text-white text-xs sm:text-sm  rounded-full">RERA ID: A52000011720</span>
            <div className="flex items-center space-x-3">
              <Link href="#" aria-label="Twitter">
                <Twitter size={18} className="text-white" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook size={18} className="text-white" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram size={18} className="text-white" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Youtube size={18} className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-md p-0">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end py-4 sm:py-8">
            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-600">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden sm:flex items-center space-x-6 lg:gap-8">
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

          {/* Mobile Navigation Links */}
          <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            {links.map((item, index) => (
              <div key={item.path} className="py-2">
                <Link
                  href={item.path}
                  className="text-gray-700 hover:text-teal-500 text-sm font-medium block"
                  onClick={() => item.dropdown && toggleDropdown(index)}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={16} className="ml-1 inline-block" />}
                </Link>
                {item.dropdown && openDropdown === index && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.path}
                        href={subItem.path}
                        className="block text-gray-600 hover:text-teal-500 text-sm"
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
      </nav>
    </header>
  );
};

export default Navbar;