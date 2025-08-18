import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GlobalLoadingScreen = ({ isLoading, loadingText }) => {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState(loadingText)

  const loadingTexts = [
    'INITIALIZING QUANTUM SYSTEMS...',
    'LOADING NEURAL NETWORKS...',
    'SYNCHRONIZING DATA STREAMS...',
    'ACTIVATING HOLOGRAPHIC INTERFACE...',
    'ESTABLISHING SECURE CONNECTION...',
    'PREPARING FUTURISTIC EXPERIENCE...',
    loadingText
  ]

  useEffect(() => {
    if (isLoading) {
      setProgress(0)
      let progressInterval
      let textInterval
      let textIndex = 0

      // Progress animation
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + Math.random() * 15
        })
      }, 100)

      // Text cycling
      textInterval = setInterval(() => {
        setCurrentText(loadingTexts[textIndex])
        textIndex = (textIndex + 1) % loadingTexts.length
      }, 500)

      return () => {
        clearInterval(progressInterval)
        clearInterval(textInterval)
      }
    }
  }, [isLoading, loadingText])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-cod-gray via-tundora to-cod-gray flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Particle Background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-nugget rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [0, -100, -200]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          {/* Main Loading Content */}
          <div className="relative z-10 text-center">
            {/* Logo Animation */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="w-24 h-24 bg-gradient-to-br from-nugget to-straw rounded-2xl flex items-center justify-center mx-auto mb-4"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(188, 158, 36, 0.3)',
                    '0 0 40px rgba(188, 158, 36, 0.6)',
                    '0 0 60px rgba(188, 158, 36, 0.9)',
                    '0 0 40px rgba(188, 158, 36, 0.6)',
                    '0 0 20px rgba(188, 158, 36, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-cod-gray font-bold text-3xl" style={{ fontFamily: 'Orbitron, monospace' }}>
                  AY
                </span>
              </motion.div>
              
              <motion.div
                className="text-nugget font-bold text-3xl mb-2"
                style={{ fontFamily: 'Orbitron, monospace' }}
                animate={{
                  textShadow: [
                    '0 0 10px rgba(188, 158, 36, 0.5)',
                    '0 0 20px rgba(188, 158, 36, 0.8)',
                    '0 0 30px rgba(188, 158, 36, 1)',
                    '0 0 20px rgba(188, 158, 36, 0.8)',
                    '0 0 10px rgba(188, 158, 36, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                AY GROUP
              </motion.div>
              
              <div className="text-straw text-sm tracking-widest">
                FUTURE OF BUSINESS
              </div>
            </motion.div>

            {/* Progress Circle */}
            <motion.div
              className="relative w-32 h-32 mx-auto mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {/* Background Circle */}
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="rgba(87, 87, 87, 0.3)"
                  strokeWidth="8"
                  fill="none"
                />
                {/* Progress Circle */}
                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress / 100 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{
                    strokeDasharray: "314.16",
                    strokeDashoffset: `${314.16 * (1 - progress / 100)}`
                  }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#bc9e24" />
                    <stop offset="100%" stopColor="#d6c78b" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Progress Percentage */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  className="text-2xl font-bold text-nugget"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                  key={Math.floor(progress)}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {Math.floor(progress)}%
                </motion.span>
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="text-silver text-lg font-medium tracking-wider"
              style={{ fontFamily: 'Orbitron, monospace' }}
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentText}
            </motion.div>

            {/* Scanning Line */}
            <motion.div
              className="mt-8 h-px bg-gradient-to-r from-transparent via-nugget to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Loading Dots */}
            <div className="flex justify-center items-center mt-6 space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-nugget rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-nugget opacity-30"></div>
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-nugget opacity-30"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-nugget opacity-30"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-nugget opacity-30"></div>

          {/* Holographic Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
              {[...Array(144)].map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-nugget"
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default GlobalLoadingScreen

