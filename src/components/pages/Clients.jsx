import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Building2, 
  Users, 
  Globe2, 
  Cpu, 
  Home,
  Handshake,
  Sparkles
} from 'lucide-react'

const Clients = () => {
  const partnerTypes = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Government Institutions",
      description: "Strategic collaborations with public sector organizations",
      count: "12+"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Private Corporations",
      description: "Fortune 500 companies and industry leaders",
      count: "50+"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "SMEs & Entrepreneurs",
      description: "Growing businesses fueling innovation",
      count: "200+"
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "International Trade Partners",
      description: "Global network across 3 continents",
      count: "30+"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Technology Providers",
      description: "Cutting-edge tech collaborators",
      count: "25+"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Real Estate Developers",
      description: "Premier property visionaries",
      count: "18+"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-cod-gray to-tundora">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center mb-4">
            <Sparkles className="w-8 h-8 text-nugget mr-3" />
            <span className="text-nugget font-medium">COLLABORATIONS</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-silver mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
            Clients <span className="text-nugget">&</span> Partners
          </h1>
          <p className="text-xl text-silver/70 max-w-3xl mx-auto">
            We power success through strategic alliances
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerTypes.map((partner, index) => (
            <motion.div
              key={index}
              className="p-8 bg-tundora/50 backdrop-blur-sm border border-nugget/10 rounded-xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-nugget/5 rounded-full group-hover:scale-110 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-nugget to-straw rounded-lg flex items-center justify-center mb-6 text-cod-gray">
                  {partner.icon}
                </div>
                <h3 className="text-2xl font-bold text-silver mb-3 flex items-center">
                  {partner.title}
                  <span className="ml-3 text-sm bg-nugget/20 text-nugget px-3 py-1 rounded-full">
                    {partner.count}
                  </span>
                </h3>
                <p className="text-silver/70 leading-relaxed mb-4">{partner.description}</p>
                <div className="flex items-center text-nugget">
                  <Handshake className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Trusted Partnership</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="inline-block px-6 py-3 bg-nugget/10 border border-nugget/20 rounded-full">
            <p className="text-nugget font-medium flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              Featured case studies coming Q4 2026
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Clients