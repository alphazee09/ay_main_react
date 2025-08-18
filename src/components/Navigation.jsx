import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLocalization } from '../contexts/LocalizationContext'
import LanguageSwitcher from './LanguageSwitcher'
import ayImg from "@/assets/ay.png"

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { t, isRTL } = useLocalization()

  const navItems = [
    { name: t('nav.home'), path: '/', id: 'home' },
    { name: t('nav.sectors'), path: '/sectors', id: 'sectors' },
    { name: t('nav.strategy'), path: '/strategy', id: 'strategy' },
    { name: t('nav.services'), path: '/services', id: 'services' },
    { name: t('nav.clients'), path: '/clients', id: 'clients' },
    { name: t('nav.about'), path: '/about', id: 'about' },
    { name: t('nav.contact'), path: '/contact', id: 'contact' },
    { name: t('nav.news'), path: '/news', id: 'news' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      x: '100%',
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-cod-gray/90 backdrop-blur-md border-b border-nugget/30' 
            : 'bg-transparent'
        }`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            {/* ✅ MAIN LOGO */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src={ayImg} 
                  alt="AY Group Logo" 
                  className="w-12 h-12 object-contain bg-white rounded-lg p-1" 
                />
                <div>
                  <div className="text-nugget font-bold text-xl" style={{ fontFamily: 'Orbitron, monospace' }}>
                    AY GROUP
                  </div>
                  <div className="text-straw text-xs tracking-wider">
                    FUTURE OF BUSINESS
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-baseline space-x-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative"
                  >
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                        location.pathname === item.path
                          ? 'text-nugget'
                          : 'text-silver hover:text-nugget'
                      }`}
                      onClick={() => setCurrentPage(item.id)}
                    >
                      <span className="relative z-10">{item.name}</span>
                      
                      {/* Hover Effect */}
                      <motion.div
                        className="absolute inset-0 bg-nugget/10 rounded-md"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      {/* Active Indicator */}
                      {location.pathname === item.path && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-nugget"
                          layoutId="activeTab"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      
                      {/* Holographic Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-nugget/20 to-transparent"
                        initial={{ x: '-100%', opacity: 0 }}
                        whileHover={{ x: '100%', opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Language Switcher */}
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-silver hover:text-nugget focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Scanning Line Effect */}
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-nugget to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-cod-gray/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Menu Content */}
            <div className="relative flex flex-col h-full pt-24 px-6">
              <div className="flex-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-4 text-lg font-medium border-b border-scorpion/30 transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'text-nugget bg-nugget/10'
                          : 'text-silver hover:text-nugget hover:bg-nugget/5'
                      }`}
                      onClick={() => {
                        setCurrentPage(item.id)
                        setIsOpen(false)
                      }}
                    >
                      <motion.div
                        className="flex items-center justify-between"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Mobile Footer */}
            {/* ✅ MAIN LOGO */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src={ayImg} 
                  alt="AY Group Logo" 
                  className="w-12 h-12 object-contain bg-white rounded-lg p-1" 
                />
                <div>
                  <div className="text-nugget font-bold text-xl" style={{ fontFamily: 'Orbitron, monospace' }}>
                    AY GROUP
                  </div>
                  <div className="text-straw text-xs tracking-wider">
                    FUTURE OF BUSINESS
                  </div>
                </div>
              </Link>
            </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation

