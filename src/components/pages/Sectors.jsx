import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Building2, 
  Code, 
  Hammer, 
  Truck, 
  Smartphone, 
  Package, 
  MapPin,
  ArrowRight,
  Zap,
  Users,
  Globe
} from 'lucide-react'
import img13 from "@/assets/13.png";
import img350 from "@/assets/350.png";
import img350c from "@/assets/350c.png";
import img350D from "@/assets/350D.png";
import img350i from "@/assets/350i.png";
import img350s from "@/assets/350s.png";
import ayImg from "@/assets/ay.png";
import bannerImg from "@/assets/banner.png";
import digImg from "@/assets/dig.png";
import toursImg from "@/assets/tours.png";


const Sectors = () => {
  const [selectedSector, setSelectedSector] = useState(null)
  const [hoveredSector, setHoveredSector] = useState(null)

  const sectors = [
    {
       id: 'business-center',
       name: 'AY Business Center',
       icon: <img src={img350} alt="Service 13" className="object-contain bg-white p-2 rounded-lg"/>,
       description:
      'Fully serviced offices, shared workspaces, virtual offices, business support, event hosting, capacity building.',
       features: [
      'Corporate Consulting',
      'Business Planning',
      'Executive Support',
      'Strategic Analytics'
            ],
     color: 'from-nugget to-straw',
     bgColor: 'bg-nugget/10'
  },

    {
      id: 'soft-labs',
      name: 'AY Soft Labs',
      icon: <img src={img350s} alt="Service 13" className="object-contain bg-black rounded-lg"/>,
      description: 'Business Solutions & app development, ERP & CRM systems, AI, cybersecurity, technical consultancy.',
      features: ['AI Development', 'Custom Software', 'Mobile Apps', 'Cloud Solutions'],
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      id: 'construction',
      name: 'AY Construction & Interiors',
      icon: <img src={img350c} alt="Service 13" className="object-contain  rounded-lg"/>,
      description: 'Building works, interior design, project studies, cost analysis.',
      features: ['Smart Buildings', 'Sustainable Design', 'Interior Innovation', 'Project Management'],
      color: 'from-green-400 to-red-400',
      bgColor: 'bg-green-400/10'
    },
    { 
      id: 'logistics',
      name: 'AY Logistics & Services',
      icon: <img src={img13} alt="Service 13" className="object-contain rounded-lg"/>,
      description: 'Event management, promotional gifts, printing, media production, catering, corporate services, logistics, marketing, PR, financial planning.',
      features: ['Event Planning', 'Services Management', 'Promotions', 'Social Media Management'],
      color: 'from-white to-green-400',
      bgColor: 'bg-purple-400/10'
    },
    {
      id: 'digital-innovators',
      name: 'AY Digital Innovators',
      icon: <img src={img350D} alt="Service 13" className="object-contain rounded-lg"/>,
      description: 'Digital marketing, SEO, social media management, paid advertising, customer management systems.',
      features: ['Digital Strategy', 'Innovation Advertising', 'Consulting', 'Digital Marketing'],
      color: 'from-black-400 to-pink-400',
      bgColor: 'bg-purple-400/10'
    },
    {
      id: 'import-export',
      name: 'AY Import & Export',
      icon: <img src={img350i} alt="Service 13" className="object-contain  bg-white rounded-lg"/>,
      description: 'Import/export operations tailored to market needs, associated logistics services.',
      features: ['Global Trade', 'Customs Solutions', 'Trade Finance', 'Market Analysis'],
      color: 'from-white-400 to-white-400',
      bgColor: 'bg-white-400/10'
    },
    {
      id: 'malaysia-tours',
      name: 'AY Malaysia Tours',
      icon: <img src={toursImg} alt="Service 13" className="object-contain rounded-lg"/>,
      description: 'Premium tourism and travel experiences in Malaysia. We offer luxury travel packages with immersive cultural experiences and cutting-edge travel technology.',
      features: ['Luxury Tours', 'Cultural Experiences', 'VR Previews', 'Personalized Itineraries'],
      color: 'from-teal-400 to-green-400',
      bgColor: 'bg-teal-400/10'
    },
      {
      id: 'ay-group',
      name: 'AY Group For Investments',
      icon: <img src={ayImg} alt="Service 13" className="object-contain  rounded-lg"/>,
      description: 'AY Group is an Oman-based investment entity founded on strategic partnerships and diversification.',
      features: ['Partnerships', 'B2B Consultations', 'Analytics & Statistics'],
      color: 'from-nugget to-straw',
      bgColor: 'bg-nugget/10'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold text-silver mb-6"
            style={{ fontFamily: 'Orbitron, monospace' }}
            animate={{
              textShadow: [
                '0 0 20px rgba(188, 158, 36, 0.3)',
                '0 0 40px rgba(188, 158, 36, 0.6)',
                '0 0 20px rgba(188, 158, 36, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Our <span className="text-nugget">Sectors</span>
          </motion.h1>
          <p className="text-xl text-silver/70 max-w-3xl mx-auto">
            Discover our diverse portfolio of innovative business sectors, each leading their respective industries into the future
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredSector(sector.id)}
              onMouseLeave={() => setHoveredSector(null)}
              onClick={() => setSelectedSector(sector)}
            >
              <motion.div
                className={`relative p-8 bg-tundora/30 backdrop-blur-sm border border-nugget/20 rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 ${
                  hoveredSector === sector.id ? 'border-nugget/60 shadow-2xl' : ''
                }`}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(188, 158, 36, 0.2)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon Container */}
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${sector.color} rounded-xl flex items-center justify-center mb-6 text-white relative`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  {sector.icon}
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-xl"
                    animate={{
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-silver mb-4 group-hover:text-nugget transition-colors duration-300">
                  {sector.name}
                </h3>
                <p className="text-silver/70 mb-6 leading-relaxed">
                  {sector.description.substring(0, 120)}...
                </p>

                {/* Features Preview */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {sector.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-nugget/20 text-nugget text-xs rounded-full border border-nugget/30"
                    >
                      {feature}
                    </span>
                  ))}
                  <span className="px-3 py-1 bg-silver/10 text-silver/60 text-xs rounded-full">
                    +{sector.features.length - 2} more
                  </span>
                </div>

                {/* Learn More Button */}
                <motion.div
                  className="flex items-center gap-2 text-nugget font-medium group-hover:gap-4 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.div>

                {/* Corner Decorations */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-nugget/30 group-hover:border-nugget transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-nugget/30 group-hover:border-nugget transition-colors duration-300" />

                {/* Scanning Line */}
                <motion.div
                  className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="absolute w-full h-px bg-gradient-to-r from-transparent via-nugget to-transparent"
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sector Detail Modal */}
        <AnimatePresence>
          {selectedSector && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSector(null)}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-cod-gray/90 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Modal Content */}
              <motion.div
                className="relative max-w-4xl w-full bg-tundora/90 backdrop-blur-sm border border-nugget/30 rounded-3xl p-8 max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedSector(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-nugget/20 hover:bg-nugget/30 rounded-full flex items-center justify-center text-nugget transition-colors duration-300"
                >
                  ×
                </button>

                {/* Header */}
                <div className="flex items-center gap-6 mb-8">
                  <motion.div
                    className={`w-24 h-24 bg-gradient-to-br ${selectedSector.color} rounded-2xl flex items-center justify-center text-white`}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {selectedSector.icon}
                  </motion.div>
                  <div>
                    <h2 className="text-4xl font-bold text-silver mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                      {selectedSector.name}
                    </h2>
                    <div className="flex items-center gap-2 text-nugget">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm">Leading Innovation</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-silver/80 mb-8 leading-relaxed">
                  {selectedSector.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {selectedSector.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="p-4 bg-nugget/10 border border-nugget/20 rounded-lg text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="text-nugget font-medium">{feature}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-nugget mb-2">500+</div>
                    <div className="text-silver/60 text-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-nugget mb-2">50+</div>
                    <div className="text-silver/60 text-sm">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-nugget mb-2">99%</div>
                    <div className="text-silver/60 text-sm">Success Rate</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-nugget to-straw text-cod-gray font-bold rounded-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    className="px-6 py-3 border border-nugget text-nugget font-bold rounded-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Sectors

