import React from 'react'
import { motion } from 'framer-motion'
import { CalendarCheck, Building, Cpu, Plane, Briefcase, Rocket, LayoutGrid, Globe } from 'lucide-react'

const ProjectsJobs = () => {
  const completedProjects = [
    {
      icon: <CalendarCheck className="w-8 h-8" />,
      title: "Corporate Events & Conferences",
      description: "Full planning and execution of high-profile corporate gatherings."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Real Estate Developments",
      description: "Commercial & residential property projects from concept to completion."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "ERP & CRM Implementations",
      description: "Seamless integration of enterprise systems for business optimization."
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Medical & Leisure Tourism",
      description: "Comprehensive programs in Malaysia for healthcare and relaxation."
    }
  ]

  const runningProjects = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "AY Business Center",
      description: "Full operations management of our premium business center."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Digital Marketing Campaigns",
      description: "Innovative campaigns through AY Digital Innovators."
    },
    {
      icon: <LayoutGrid className="w-8 h-8" />,
      title: "Commercial Fit-Out Projects",
      description: "Ongoing interior design and space optimization projects."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Import/Export Contracts",
      description: "Active trade agreements with partners in Asia and Africa."
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
            Projects <span className="text-nugget">&</span> Jobs
          </h1>
          <p className="text-xl text-silver/70 max-w-3xl mx-auto">
            Our portfolio of completed and ongoing ventures
          </p>
        </motion.div>

        <motion.div
          className="mb-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-nugget mb-10 text-center">Completed Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {completedProjects.map((project, index) => (
              <motion.div
                key={index}
                className="p-8 bg-tundora/30 backdrop-blur-sm border border-nugget/20 rounded-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-nugget to-straw rounded-lg flex items-center justify-center mb-6 text-cod-gray">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-silver mb-4">{project.title}</h3>
                <p className="text-silver/70 leading-relaxed">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-nugget mb-10 text-center">Running Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {runningProjects.map((project, index) => (
              <motion.div
                key={index}
                className="p-8 bg-tundora/30 backdrop-blur-sm border border-nugget/20 rounded-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-nugget to-straw rounded-lg flex items-center justify-center mb-6 text-cod-gray">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-silver mb-4">{project.title}</h3>
                <p className="text-silver/70 leading-relaxed">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectsJobs