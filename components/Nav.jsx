import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const links = [
  { path: '/', name: 'home' },
  { 
    path: '/about', 
    name: 'about',
    dropdown: [
      { path: '/about/team', name: 'Our Team' },
      { path: '/about/history', name: 'Our History' },
    ]
  },
  { 
    path: '/projects', 
    name: 'projects',
    dropdown: [
      { path: '/projects/residential', name: 'Residential' },
      { path: '/projects/commercial', name: 'Commercial' },
    ]
  },
  { 
    path: '/buyersGuide', 
    name: 'buyersGuide',
    dropdown: [
      { path: '/buyersGuide/process', name: 'Buying Process' },
      { path: '/buyersGuide/financing', name: 'Financing Options' },
    ]
  },
  { path: '/gallery', name: 'gallery' },
  { path: '/career', name: 'career' },
  { path: '/contact', name: 'contact' },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDropdown = (linkName) => {
    setOpenDropdown(openDropdown === linkName ? null : linkName);
  };

  const handleMouseEnter = (linkName) => {
    if (!isMobile) {
      setOpenDropdown(linkName);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setOpenDropdown(null);
    }
  };

  const handleDropdownItemClick = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <div key={index} className={`relative ${isMobile ? 'w-full' : 'group'}`}>
            <div
              className={`flex items-center justify-between ${linkStyles}`}
              onClick={() => isMobile && link.dropdown && handleDropdown(link.name)}
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={link.path}>
                {link.name}
              </Link>
              {link.dropdown && isMobile && (
                <span className="ml-1">{openDropdown === link.name ? '▲' : '▼'}</span>
              )}
            </div>
            {link.path === path && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.dropdown && (openDropdown === link.name || (!isMobile && path.startsWith(link.path))) && (
              <div 
                className={`${isMobile ? 'w-full' : 'absolute left-0'} mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {link.dropdown.map((dropdownItem, dropdownIndex) => (
                    <Link
                      key={dropdownIndex}
                      href={dropdownItem.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={handleDropdownItemClick}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Nav;