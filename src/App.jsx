import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Contexts
import { LoadingProvider, useLoading } from './contexts/LoadingContext'
import { LocalizationProvider, useLocalization } from './contexts/LocalizationContext'

// Components
import LoadingScreen from './components/LoadingScreen'
import GlobalLoadingScreen from './components/GlobalLoadingScreen'
import Navigation from './components/Navigation'
import ParticleBackground from './components/ParticleBackground'
import HomePage from './components/pages/HomePage'
import Sectors from './components/pages/Sectors'
import Strategy from './components/pages/Strategy'
import Services from './components/pages/Services'
import Clients from './components/pages/Clients'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import News from './components/pages/News'

// Navigation Loading Handler Component
const NavigationLoadingHandler = ({ children }) => {
  const location = useLocation()
  const { startLoading, stopLoading } = useLoading()
  const { t } = useLocalization()
  const [prevLocation, setPrevLocation] = useState(location.pathname)

  useEffect(() => {
    if (location.pathname !== prevLocation) {
      // Start loading when route changes
      const pageNames = {
        '/': t('loading.home'),
        '/sectors': t('loading.sectors'),
        '/strategy': t('loading.strategy'),
        '/services': t('loading.services'),
        '/clients': t('loading.clients'),
        '/about': t('loading.about'),
        '/contact': t('loading.contact'),
        '/news': t('loading.news')
      }
      
      startLoading(pageNames[location.pathname] || t('common.loading'))
      
      // Simulate loading time for smooth transition
      const timer = setTimeout(() => {
        stopLoading()
        setPrevLocation(location.pathname)
      }, 1200)

      return () => clearTimeout(timer)
    }
  }, [location.pathname, prevLocation, startLoading, stopLoading, t])

  return children
}

// Main App Content Component
const AppContent = () => {
  const [initialLoading, setInitialLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState('home')
  const { isLoading, loadingText } = useLoading()

  useEffect(() => {
    // Initial loading simulation
    const timer = setTimeout(() => {
      setInitialLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const pageVariants = {
    initial: { 
      opacity: 0, 
      x: 100,
      scale: 0.95
    },
    in: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    out: { 
      opacity: 0, 
      x: -100,
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: [0.55, 0.085, 0.68, 0.53]
      }
    }
  }

  if (initialLoading) {
    return <LoadingScreen />
  }

  return (
    <>
      {/* Global Loading Screen for Navigation */}
      <GlobalLoadingScreen isLoading={isLoading} loadingText={loadingText} />
      
      <div className="App min-h-screen relative overflow-hidden">
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Cyber Grid Overlay */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-nugget/5 to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(188,158,36,0.03)_25px,rgba(188,158,36,0.03)_26px,transparent_27px,transparent_74px,rgba(188,158,36,0.03)_75px,rgba(188,158,36,0.03)_76px,transparent_77px),linear-gradient(rgba(188,158,36,0.03)_24px,transparent_25px,transparent_26px,rgba(188,158,36,0.03)_27px,rgba(188,158,36,0.03)_74px,transparent_75px,transparent_76px,rgba(188,158,36,0.03)_77px)] bg-[length:100px_100px]"></div>
        </div>

        {/* Navigation */}
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* Main Content */}
        <main className="relative z-10 pt-20">
          <NavigationLoadingHandler>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={
                  <motion.div
                    key="home"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                  >
                    <HomePage />
                  </motion.div>
                } />
                <Route path="/sectors" element={
                  <motion.div
                    key="sectors"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                  >
                    <Sectors />
                  </motion.div>
                } />
                <Route path="/strategy" element={
                  <motion.div
                    key="strategy"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                  >
                    <Strategy />
                  </motion.div>
                } />
                <Route path="/services" element={
                  <motion.div
                    key="services"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                  >
                    <Services />
                  </motion.div>
                } />
                <Route path="/clients" element={
                  <motion.div
                    key="clients"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                  >
                    <Clients />
                  </motion.div>
                } />
                <Route path="/about" element={
                  <motion.div
                    key="about"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                  >
                    <About />
                  </motion.div>
                } />
                <Route path="/contact" element={
                  <motion.div
                    key="contact"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                  >
                    <Contact />
                  </motion.div>
                } />
                <Route path="/news" element={
                  <motion.div
                    key="news"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                  >
                    <News />
                  </motion.div>
                } />
              </Routes>
            </AnimatePresence>
          </NavigationLoadingHandler>
        </main>

        {/* Floating Action Elements */}
        <div className="fixed bottom-8 right-8 z-50">
          <motion.div
            className="w-12 h-12 bg-nugget/20 rounded-full flex items-center justify-center cursor-pointer cyber-border"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <motion.div
              className="w-6 h-6 border-t-2 border-r-2 border-nugget transform rotate-[-45deg]"
              animate={{ y: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        </div>

        {/* Ambient Light Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nugget/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-straw/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
    </>
  )
}

// Main App Component with Providers
function App() {
  return (
    <LocalizationProvider>
      <LoadingProvider>
        <Router>
          <AppContent />
        </Router>
      </LoadingProvider>
    </LocalizationProvider>
  )
}

export default App

