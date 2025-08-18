import React from 'react'
import { motion } from 'framer-motion'
import { 
  Rocket, 
  Eye, 
  Diamond, 
  Leaf, 
  Handshake, 
  Lightbulb,
  Globe,
  BarChart2,
  Shield,
  TrendingUp
} from 'lucide-react'

const About = () => {
  const coreValues = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Partnership",
      description: "Building lasting relationships through trust and mutual success"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Pioneering solutions that redefine industry standards"
    },
    {
      icon: <Diamond className="w-8 h-8" />,
      title: "Excellence",
      description: "Uncompromising quality in every venture we undertake"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "Future-focused initiatives that benefit business and planet"
    }
  ]

  const stats = [
    { value: "10+", label: "Years of Excellence", icon: <Shield className="w-6 h-6" /> },
    { value: "50+", label: "Successful Projects", icon: <BarChart2 className="w-6 h-6" /> },
    { value: "3", label: "Continents", icon: <Globe className="w-6 h-6" /> },
    { value: "100%", label: "Commitment", icon: <TrendingUp className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-cod-gray/90 to-cod-gray">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-28"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center mb-6 px-6 py-2 bg-nugget/10 border border-nugget/20 rounded-full">
            <Rocket className="w-5 h-5 text-nugget mr-2" />
            <span className="text-nugget font-medium">OMAN'S BUSINESS CATALYST</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-silver mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
            Your Business <span className="text-nugget">Success Partner</span>
          </h1>
          <p className="text-2xl text-silver/70 max-w-4xl mx-auto leading-relaxed">
            Innovating, investing, and leading across multiple sectors for a sustainable future
          </p>
        </motion.div>

        {/* Who We Are */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-28 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-4xl font-bold text-silver mb-6 flex items-center">
              <Eye className="w-8 h-8 text-nugget mr-4" />
              <span>Who We Are</span>
            </h2>
            <p className="text-lg text-silver/80 leading-relaxed mb-6">
              AY Group is an Oman-based investment entity founded on strategic partnerships and diversification. 
              We specialize in acquiring promising projects, establishing groundbreaking ventures, and managing 
              operations across multiple high-growth sectors.
            </p>
            <p className="text-lg text-silver/80 leading-relaxed">
              Our portfolio reflects our commitment to innovation and sustainability, with each investment 
              carefully selected to drive both economic value and positive impact.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 bg-nugget/10 rounded-2xl rotate-3"></div>
            <div className="relative bg-tundora/50 backdrop-blur-sm border border-nugget/20 rounded-xl p-8 h-full">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="p-4 bg-tundora/70 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center mb-2 text-nugget">
                      {stat.icon}
                      <span className="text-3xl font-bold ml-2">{stat.value}</span>
                    </div>
                    <p className="text-sm text-silver/70">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision & Values */}
        <div className="mb-28">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-silver mb-6">
              Our <span className="text-nugget">Guiding Principles</span>
            </h2>
            <p className="text-xl text-silver/70 max-w-3xl mx-auto">
              The foundation of every decision we make and every partnership we form
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="p-8 bg-tundora/50 backdrop-blur-sm border border-nugget/20 rounded-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-nugget to-straw rounded-lg flex items-center justify-center mb-6 text-cod-gray">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-silver mb-4">{value.title}</h3>
                <p className="text-silver/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <motion.div 
          className="bg-gradient-to-r from-nugget/10 to-straw/10 border border-nugget/20 rounded-2xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Eye className="w-12 h-12 text-nugget mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-silver mb-4">Our Vision</h3>
          <p className="text-2xl text-silver/80 max-w-3xl mx-auto">
            To be the <span className="text-nugget font-bold">leading provider</span> of integrated business solutions in the region, 
            recognized for our <span className="text-nugget font-bold">innovation</span> and <span className="text-nugget font-bold">sustainable impact</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About