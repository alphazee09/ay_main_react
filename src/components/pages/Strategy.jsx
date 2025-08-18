import React from 'react'
import { motion } from 'framer-motion'
import { Target, Lightbulb, TrendingUp, Shield } from 'lucide-react'

const Strategy = () => {
  const strategies = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Acquiring existing projects",
      description: "We identify and invest in high-potential businesses to expand our portfolio and accelerate growth."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Launching new ventures",
      description: "We create and develop innovative business ideas, turning concepts into sustainable enterprises."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Managing and operating ongoing businesses",
      description: "We provide strong leadership, efficient operations, and continuous improvement to ensure long-term success."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Building smart partnerships",
      description: "We collaborate with trusted partners to leverage expertise, resources, and networks for mutual benefit."
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-silver mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
            Our <span className="text-nugget">Strategy</span>
          </h1>
          <p className="text-xl text-silver/70 max-w-3xl mx-auto">
            We implement a horizontal expansion model, targeting small and medium-sized enterprises and large-scale projects. Our strategies include:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              className="p-8 bg-tundora/30 backdrop-blur-sm border border-nugget/20 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-nugget to-straw rounded-lg flex items-center justify-center mb-6 text-cod-gray">
                {strategy.icon}
              </div>
              <h3 className="text-2xl font-bold text-silver mb-4">{strategy.title}</h3>
              <p className="text-silver/70 leading-relaxed">{strategy.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Strategy

