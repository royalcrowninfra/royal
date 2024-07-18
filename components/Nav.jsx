"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  { path: "/", name: "home" },
  {
    path: "/about",
    name: "about",
    dropdown: [
      { path: "/about", name: "about" },
      { path: "/about/history", name: "Our History" },
    ],
  },
  {
    path: "/projects",
    name: "projects",
    dropdown: [
      { path: "/projects/residential", name: "Residential" },
      { path: "/projects/commercial", name: "Commercial" },
    ],
  },
  {
    path: "/buyersGuide",
    name: "buyersGuide",
    dropdown: [
      { path: "/buyersGuide/process", name: "Buying Process" },
      { path: "/buyersGuide/financing", name: "Financing Options" },
    ],
  },
  { path: "/gallery", name: "gallery" },
  { path: "/career", name: "career" },
  { path: "/contact", name: "contact" },
];

const NavLink = ({ href, children, isActive }) => (
  <Link
    href={href}
    className={`text-sm font-medium transition-colors hover:text-primary ${
      isActive ? "text-primary" : "text-muted-foreground"
    }`}
  >
    {children}
  </Link>
);

const NavItem = ({ item, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    // router.events.on("routeChangeStart", handleRouteChange);
    handleRouteChange();
    return () => {
      // router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  if (item.dropdown) {
    return (
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Button
          variant='ghost'
          className={`text-sm font-medium transition-colors hover:text-primary ${
            isActive ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {item.name}
        </Button>
        {isOpen && (
          <div className='absolute py-2 w-48 bg-background rounded-md shadow-xl z-20'>
            {item.dropdown.map((dropdownItem) => (
              <Link
                key={dropdownItem.path}
                href={dropdownItem.path}
                className='block px-4 py-2 text-sm text-foreground hover:bg-accent'
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
    <NavLink href={item.path} isActive={isActive}>
      {item.name}
    </NavLink>
  );
};

const MobileNavItem = ({ item, onClose }) => {
  if (item.dropdown) {
    return (
      <div className='space-y-1'>
        <Button variant='ghost' className='w-full justify-start font-bold'>
          {item.name}
        </Button>
        {item.dropdown.map((dropdownItem) => (
          <Link
            key={dropdownItem.path}
            href={dropdownItem.path}
            className='block pl-4 py-2 text-sm'
            onClick={onClose}
          >
            {dropdownItem.name}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <Link
      href={item.path}
      className='block py-2 text-sm font-medium'
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
    <header className='sticky h-14  top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='flex items-center w-full'>
        <div className='items-center w-full justify-between hidden md:flex'>
          <Link href='/' className='flex items-center space-x-2'>
            <span className='hidden font-bold sm:inline-block'>
              <Logo />
            </span>
          </Link>
          <nav className='flex flex-1 items-center space-x-6 text-sm font-medium'>
            {links.map((item) => (
              <NavItem
                key={item.path}
                item={item}
                isActive={
                  pathname === item.path || pathname.startsWith(item.path + "/")
                }
              />
            ))}
          </nav>
          <ThemeToggler />
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant='ghost'
              className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
            >
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='pr-0'>
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <nav className='flex flex-col space-y-3'>
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
    </header>
  );
};

export default Navbar;
