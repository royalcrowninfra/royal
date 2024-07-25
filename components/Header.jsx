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
      { path: "/about", name: "Our Team" },
      { path: "/about/aboutTheGroup", name: "About The Group" },
      { path: "/about/visionAndMission", name: "Vision And Mission" },
      { path: "/about/philosophy", name: "Philosophy" },
      { path: "/about/values", name: "Values" },
    ],
  },
  { path: "/our-team", name: "Our Team" },
  {
    path: "/projects",
    name: "Projects",
    dropdown: [
      { path: "/projects/ongoing-projects", name: "Ongoing Projects" },
      { path: "/projects/completed-projects", name: "Completed Projects" },
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
  { path: "/contact-us", name: "Contact Us" },
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
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-blue-600 py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-2 md:mb-0">
            <span className="text-white text-sm flex items-center">
              <Phone size={16} className="mr-2" />
              (+1) 212-946-2707
            </span>
            <span className="text-white text-sm flex items-center">
              <Mail size={16} className="mr-2" />
              info@royalcrown.com
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full">RERA ID: A52000011720</span>
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
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo.png" width={150} height={60} alt="Royal Crown Realty" className="h-12 w-auto" />
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-600">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              {links.map((item, index) => (
                <div key={item.path} className="relative group">
                  <Link
                    href={item.path}
                    className="text-gray-700 hover:text-teal-500 text-sm font-medium flex items-center"
                    onMouseEnter={() => item.dropdown && toggleDropdown(index)}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={16} className="ml-1" />}
                  </Link>
                  {item.dropdown && (
                    <div
                      className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ${
                        openDropdown === index ? 'block' : 'hidden'
                      } transition-all duration-300 z-50`}
                      onMouseLeave={() => toggleDropdown(null)}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
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