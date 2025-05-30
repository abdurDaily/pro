import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import HireBtn from '../components/hire/HireBtn';
import List from '../components/list/List';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/">
              <img src="/images/logo.png" alt="Logo" className="h-10" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center">
              <List />
            </div>

            {/* Desktop Hire Button */}
            <div className="hidden lg:block">
              <HireBtn link="">Hire me</HireBtn>
            </div>

            {/* Hamburger Menu */}
            <div className="lg:hidden text-3xl">
              <button onClick={() => setSidebarOpen(true)} aria-label="Open Menu">
                <HiMenu />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay + Drawer */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar Drawer */}
            <motion.div
              className="fixed top-0 right-0 w-3/4 sm:w-1/2 max-w-[300px] h-full bg-white shadow-lg z-50 p-6 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              {/* Close Button */}
              <button className="self-end text-3xl mb-6" onClick={() => setSidebarOpen(false)}>
                <HiX />
              </button>

              {/* Sidebar Nav List */}
              <div className="mb-6">
                <List
                  className="flex-col gap-2"
                  onItemClick={() => setSidebarOpen(false)}
                />
              </div>

              {/* Sidebar Button */}
              <HireBtn link="">Hire me</HireBtn>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
