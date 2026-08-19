import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import LogoImg from '../assets/logo.png';

const navItems = [
  'Home',
  'About Us',
  'Mission & Vision',
  'Our Team',
  'Clients',
  'Contact',
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    // later you can add scroll-to-section here
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-24 z-50 flex items-center justify-between px-6 md:px-10 lg:px-24 text-white transition-colors duration-300 ${
          isScrolled ? 'bg-sky-600/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        {/* Left: Logo */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={LogoImg}
            alt="Company Logo"
            className="w-20 h-12 object-contain"
          />
        </motion.div>

        {/* Center: Nav Links (desktop) */}
        <motion.ul
          className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm xl:text-base font-medium uppercase"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          {navItems.map((item) => (
            <motion.li
              key={item}
              className="cursor-pointer"
              whileHover={{
                y: -3,
                scale: 1.05,
                color: '#60A5FA',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              onClick={() => handleNavClick(item)}
            >
              <span className="relative inline-block">
                {item}
                <motion.span
                  className="absolute left-0 -bottom-1 h-[2px] bg-blue-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Right: Let's Talk Button (desktop) */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.button
            className="bg-white hover:bg-blue-600 hover:text-white text-black font-semibold py-2.5 px-4 rounded-full text-sm lg:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          >
            Let&apos;s Talk
          </motion.button>
        </motion.div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden items-center justify-center w-10 h-10 rounded-full border border-white/40 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            <HiX className="w-6 h-6 text-white" />
          ) : (
            <HiOutlineMenu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <motion.div
        className="fixed inset-x-0 top-24 z-40 md:hidden"
        initial={false}
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, y: 0, pointerEvents: 'auto' },
          closed: { opacity: 0, y: -10, pointerEvents: 'none' },
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <div className="mx-4 rounded-2xl bg-[#012A4A]/95 backdrop-blur-xl border border-white/10 shadow-xl">
          <ul className="flex flex-col py-4 px-4 space-y-2 text-sm font-medium uppercase text-white">
            {navItems.map((item) => (
              <motion.li
                key={item}
                whileHover={{ x: 4, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleNavClick(item)}
                className="cursor-pointer rounded-xl px-3 py-2 hover:bg-white/10"
              >
                {item}
              </motion.li>
            ))}

            {/* Mobile "Let's Talk" */}
            <li className="pt-2">
              <motion.button
                className="bg-white hover:bg-blue-600 hover:text-white text-black font-semibold py-2.5 px-5 rounded-full text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Let&apos;s Talk
              </motion.button>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
