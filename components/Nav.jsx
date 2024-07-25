// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Logo from "./Logo";
// import ThemeToggler from "./ThemeToggler";

// const links = [
//   { path: "/", name: "Home" },
//   {
//     path: "/about",
//     name: "About",
//     dropdown: [
//       { path: "/about", name: "Our Team" },
//       { path: "/about/aboutTheGroup", name: "About The Group" },
//       { path: "/about/visionAndMission", name: "Vision And Mission" },
//       { path: "/about/philosophy", name: "Philosophy" },
//       { path: "/about/values", name: "Values" },
//     ],
//   },
//   {
//     path: "/",
//     name: "Projects",
//     dropdown: [
//       { path: "/projects/ongoingProjects", name: "Ongoing Projects" },
//       { path: "/projects/completedProjects", name: "Completed Projects" },
//     ],
//   },
//   {
//     path: "/",
//     name: "Buyers Guide",
//     dropdown: [
//       { path: "/buyersGuide/panvelDevelopment", name: "Panvel Development" },
//       { path: "/buyersGuide/homeLoans", name: "Home Loans" },
//       { path: "/buyersGuide/gst", name: "GST" },
//       { path: "/buyersGuide/stampDuty&Reg", name: "Stamp Duty & Reg" },
//       { path: "/buyersGuide/legal&TaxBenefits", name: "Legal & Tax Benefits" },
//       { path: "/buyersGuide/nriGuide", name: "NRI Guide" },
//       { path: "/buyersGuide/pmay", name: "PMAY" },
//       { path: "/buyersGuide/emiCalculator", name: "EMI Calculator" },
//     ],
//   },
//   { path: "/gallery", name: "Gallery" },
//   { path: "/career", name: "Career" },
//   { path: "/contact", name: "Contact" },
// ];

// const NavLink = ({ href, children, isActive, hasDropdown, onClick, isMobile }) => (
//   <Link href={href} onClick={onClick}>
//     <motion.span
//       className={`text-sm font-medium transition-colors hover:text-primary ${
//         isActive ? "text-primary" : "text-muted-foreground"
//       } ${hasDropdown ? "flex items-center justify-between" : ""} ${
//         isMobile ? "py-2 px-4 w-full" : ""
//       }`}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       {children}
//       {hasDropdown && (isMobile ? <ChevronRight className="h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />)}
//     </motion.span>
//   </Link>
// );

// const DropdownMenu = ({ items, isOpen, onClose, isMobile }) => (
//   <AnimatePresence>
//     {isOpen && (
//       <motion.div
//         initial={{ opacity: 0, y: isMobile ? 0 : -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: isMobile ? 0 : -10 }}
//         transition={{ duration: 0.2 }}
//         className={`${
//           isMobile ? "w-full" : "absolute left-0 mt-2 w-48"
//         } bg-background rounded-md shadow-xl z-20`}
//       >
//         {items.map((item) => (
//           <Link
//             key={item.path}
//             href={item.path}
//             className={`block px-4 py-2 text-sm text-foreground hover:bg-accent ${
//               isMobile ? "border-b border-gray-200 last:border-b-0" : ""
//             }`}
//             onClick={onClose}
//           >
//             {item.name}
//           </Link>
//         ))}
//       </motion.div>
//     )}
//   </AnimatePresence>
// );

// const NavItem = ({ item, isActive, isMobile, onClose }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleMouseEnter = () => !isMobile && setIsOpen(true);
//   const handleMouseLeave = () => !isMobile && setIsOpen(false);
//   const handleClick = () => {
//     if (isMobile) {
//       setIsOpen(!isOpen);
//     } else if (!item.dropdown) {
//       onClose();
//     }
//   };

//   return (
//     <div
//       className={`relative ${isMobile ? "w-full" : ""}`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <NavLink
//         href={item.path}
//         isActive={isActive}
//         hasDropdown={!!item.dropdown}
//         onClick={handleClick}
//         isMobile={isMobile}
//       >
//         {item.name}
//       </NavLink>
//       {item.dropdown && (
//         <DropdownMenu
//           items={item.dropdown}
//           isOpen={isOpen}
//           onClose={() => {
//             setIsOpen(false);
//             onClose();
//           }}
//           isMobile={isMobile}
//         />
//       )}
//     </div>
//   );
// };

// const MobileMenu = ({ isOpen, links, pathname, onClose }) => (
//   <AnimatePresence>
//     {isOpen && (
//       <motion.div
//         initial={{ opacity: 0, height: 0 }}
//         animate={{ opacity: 1, height: "auto" }}
//         exit={{ opacity: 0, height: 0 }}
//         transition={{ duration: 0.3 }}
//         className="md:hidden fixed inset-x-0 top-16 bg-background shadow-lg"
//       >
//         <div className="px-4 py-2 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
//           {links.map((item) => (
//             <NavItem
//               key={item.path}
//               item={item}
//               isActive={pathname.startsWith(item.path)}
//               isMobile={true}
//               onClose={onClose}
//             />
//           ))}
//         </div>
//       </motion.div>
//     )}
//   </AnimatePresence>
// );

// const Navbar = () => {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsOpen(false);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <nav className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           <Link href="/" className="flex items-center space-x-2">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Logo className="h-10 w-auto" />
//             </motion.div>
//           </Link>

//           <div className="hidden md:flex items-center space-x-6">
//             {links.map((item) => (
//               <NavItem
//                 key={item.path}
//                 item={item}
//                 isActive={pathname.startsWith(item.path)}
//                 onClose={() => {}}
//               />
//             ))}
//           </div>

//           <div className="flex items-center space-x-4">
//             <ThemeToggler />
//             <button
//               className="md:hidden"
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle Menu"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       <MobileMenu
//         isOpen={isOpen}
//         links={links}
//         pathname={pathname}
//         onClose={() => setIsOpen(false)}
//       />
//     </header>
//   );
// };

// export default Navbar;