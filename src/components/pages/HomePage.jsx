import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Zap, Globe, Rocket, Shield, Star, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom' // Import Link component

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Your Business Success Partner"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Worldwide presence with local expertise in every market"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation First",
      description: "Leading the future with breakthrough solutions and visionary thinking"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.99% uptime guarantee"
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Dynamic Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-nugget/5 via-transparent to-transparent"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(188, 158, 36, 0.1) 0%, transparent 50%)`
          }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: y1 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-nugget rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="relative z-10 text-center max-w-6xl mx-auto px-4"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity }}
        >
          {/* Subtitle */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-nugget/10 border border-nugget/30 rounded-full text-nugget text-sm font-medium tracking-wider">
              ALWAYS YOU, ASPIRE YOUR WAY
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            <motion.span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-nugget via-straw to-nugget"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              AY
            </motion.span>
            <br />
            <motion.span
              className="inline-block text-silver"
              animate={{
                textShadow: [
                  '0 0 20px rgba(188, 158, 36, 0.5)',
                  '0 0 40px rgba(188, 158, 36, 0.8)',
                  '0 0 20px rgba(188, 158, 36, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              GROUP
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-silver/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Innovating, investing{' '}
            <span className="text-nugget font-semibold">revolutionary innovation</span>,{' '}
            <span className="text-straw font-semibold">cutting-edge technology</span>, We Are{' '}
            <span className="text-nugget font-semibold">Your Business Success Partner</span>
          </motion.p>

          {/* CTA Buttons */}
<motion.div
  variants={itemVariants}
  className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
>
  <Link to="/services">
    <motion.button
      className="group relative px-8 py-4 bg-gradient-to-r from-nugget to-straw text-cod-gray font-bold text-lg rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center gap-2 text-black">
        Explore Our Services
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-straw to-nugget"
        initial={{ x: '-100%' }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  </Link>

  <Link to="/contact">
    <motion.button
      className="group px-8 py-4 border-2 border-nugget text-nugget font-bold text-lg rounded-lg relative overflow-hidden"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">Contact Our Team</span>
      <motion.div
        className="absolute inset-0 bg-nugget/10"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  </Link>
</motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <span className="text-silver/60 text-sm mb-2 tracking-wider">DISCOVER MORE</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-nugget"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Holographic Overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              'linear-gradient(45deg, transparent 30%, rgba(188, 158, 36, 0.05) 50%, transparent 70%)',
              'linear-gradient(45deg, transparent 40%, rgba(188, 158, 36, 0.03) 50%, transparent 60%)',
              'linear-gradient(45deg, transparent 30%, rgba(188, 158, 36, 0.05) 50%, transparent 70%)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ backgroundSize: '200% 200%' }}
        />
      </section>

      {/* Features Section */}
      <motion.section
        className="relative py-32 px-4"
        style={{ y: y2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-silver mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
              Why Choose <span className="text-nugget">AY Group</span>
            </h2>
            <p className="text-xl text-silver/70 max-w-3xl mx-auto">
              Experience the power of next-generation business solutions designed for the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative p-8 bg-tundora/30 backdrop-blur-sm border border-nugget/20 rounded-xl hover:border-nugget/50 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-nugget to-straw rounded-lg flex items-center justify-center mb-6 text-cod-gray"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-silver mb-4">{feature.title}</h3>
                <p className="text-silver/70 leading-relaxed">{feature.description}</p>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-nugget/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                {/* Corner Decorations */}
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-nugget/30 group-hover:border-nugget transition-colors duration-300" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-nugget/30 group-hover:border-nugget transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="relative py-20 px-4 bg-tundora/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2090+', label: 'Future Projects' },
              { number: '500+', label: 'Global Clients' },
              { number: '99.9%', label: 'Success Rate' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-nugget mb-2"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(188, 158, 36, 0.5)',
                      '0 0 20px rgba(188, 158, 36, 0.8)',
                      '0 0 10px rgba(188, 158, 36, 0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-silver/70 text-sm tracking-wider uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default HomePage