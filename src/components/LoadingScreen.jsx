import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('INITIALIZING')

  const loadingStages = [
    'INITIALIZING',
    'CONNECTING TO FUTURE',
    'LOADING QUANTUM DATA',
    'SYNCHRONIZING MATRIX',
    'ACTIVATING NEURAL NETWORK',
    'WELCOME TO AY GROUP'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15
        if (newProgress >= 100) {
          clearInterval(interval)
          return 100
        }
        return newProgress
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        const currentIndex = loadingStages.indexOf(prev)
        const nextIndex = (currentIndex + 1) % loadingStages.length
        return loadingStages[nextIndex]
      })
    }, 500)

    return () => clearInterval(textInterval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 bg-cod-gray flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-nugget/30 font-mono text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {Math.random().toString(36).substring(7)}
          </motion.div>
        ))}
      </div>

      {/* Main Loading Container */}
      <div className="relative z-10 text-center">
        {/* AY Group Logo Animation */}
        <motion.div
          className="mb-12"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.div
            className="text-6xl font-bold text-nugget mb-4"
            style={{ fontFamily: 'Orbitron, monospace' }}
            animate={{
              textShadow: [
                '0 0 20px #bc9e24',
                '0 0 40px #bc9e24, 0 0 60px #bc9e24',
                '0 0 20px #bc9e24'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            AY GROUP
          </motion.div>
          <motion.div
            className="text-straw text-lg tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            FUTURE OF BUSINESS
          </motion.div>
        </motion.div>

        {/* Futuristic Loading Spinner */}
        <div className="relative mb-8">
          <motion.div
            className="w-32 h-32 mx-auto relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            {/* Outer Ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-nugget rounded-full"></div>
            {/* Middle Ring */}
            <motion.div
              className="absolute inset-2 border-3 border-transparent border-r-straw rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            {/* Inner Ring */}
            <motion.div
              className="absolute inset-4 border-2 border-transparent border-b-nugget rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            {/* Center Dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-4 h-4 bg-nugget rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 h-2 bg-scorpion rounded-full mx-auto mb-6 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-nugget to-straw rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>

        {/* Progress Percentage */}
        <motion.div
          className="text-nugget text-2xl font-mono mb-4"
          key={Math.floor(progress)}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {Math.floor(progress)}%
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="text-silver text-sm tracking-widest font-mono"
          key={loadingText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {loadingText}
        </motion.div>

        {/* Scanning Line Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ y: '100%' }}
          animate={{ y: '-100%' }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-nugget to-transparent opacity-50"></div>
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8">
        <motion.div
          className="w-16 h-16 border-l-2 border-t-2 border-nugget"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        ></motion.div>
      </div>
      <div className="absolute top-8 right-8">
        <motion.div
          className="w-16 h-16 border-r-2 border-t-2 border-nugget"
          initial={{ scale: 0, rotate: 90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        ></motion.div>
      </div>
      <div className="absolute bottom-8 left-8">
        <motion.div
          className="w-16 h-16 border-l-2 border-b-2 border-nugget"
          initial={{ scale: 0, rotate: 90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        ></motion.div>
      </div>
      <div className="absolute bottom-8 right-8">
        <motion.div
          className="w-16 h-16 border-r-2 border-b-2 border-nugget"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
        ></motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen

