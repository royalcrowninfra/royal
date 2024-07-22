"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";

const links = [
  { path: "/", name: "Home" },
  {
    path: "/about",
    name: "About",
    dropdown: [
      { path: "/about", name: "Our Team" },
      { path: "/about/aboutTheGroup", name: "About The Group" },
      { path: "/about/visionAndMission", name: "Vision And Mission" },
      { path: "/about/philosophy", name: "Philosophy" },
      { path: "/about/values", name: "Values" },
    ],
  },
  {
    path: "/projects",
    name: "Projects",
    dropdown: [
      { path: "/projects/ongoingProjects", name: "Ongoing Projects" },
      { path: "/projects/completedProjects", name: "Completed Projects" },
    ],
  },
  {
    path: "/buyersGuide",
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
  { path: "/gallery", name: "Gallery" },
  { path: "/career", name: "Career" },
  { path: "/contact", name: "Contact" },
];

const NavLink = ({ href, children, isactive }) => ( 
  <Link
    href={href}
    className={`text-sm font-medium transition-colors hover:text-primary ${
      isactive ? "text-primary" : "text-muted-foreground"
    }`}
  >
    {children}
  </Link>
);

const NavItem = ({ item, isactive }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item.dropdown) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Button
          variant="ghost"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            isactive ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {item.name} <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
        {isOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-background rounded-md shadow-xl z-20">
            {item.dropdown.map((dropdownItem) => (
              <Link
                key={dropdownItem.path}
                href={dropdownItem.path}
                className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
              >
                {dropdownItem.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <NavLink href={item.path} isactive={isactive}>
      {item.name}
    </NavLink>
  );
};

const MobileNavItem = ({ item, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item.dropdown) {
    return (
      <div className="space-y-1">
        <Button
          variant="ghost"
          className="w-full justify-between font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.name}
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </Button>
        {isOpen && (
          <div className="pl-4 space-y-1">
            {item.dropdown.map((dropdownItem) => (
              <Link
                key={dropdownItem.path}
                href={dropdownItem.path}
                className="block py-2 text-sm"
                onClick={onClose}
              >
                {dropdownItem.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.path}
      className="block py-2 text-sm font-medium"
      onClick={onClose}
    >
      {item.name}
    </Link>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">
              <Logo />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {links.map((item) => (
              <NavItem
                key={item.path}
                item={item}
                isactive={
                  pathname === item.path || pathname.startsWith(item.path + "/")
                }
              />
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggler />
            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="md:hidden"
                  aria-label="Toggle Menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-4">
                  {links.map((item) => (
                    <MobileNavItem
                      key={item.path}
                      item={item}
                      onClose={() => setIsOpen(false)}
                    />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;