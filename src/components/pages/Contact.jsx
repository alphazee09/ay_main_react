import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Globe, 
  Facebook, 
  Instagram, 
  Linkedin,
  Clock,
  MessageSquare,
  User,
  ArrowRight
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
    console.log('Form submitted:', formData)
  }

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "contact@ay-group.net",
      action: "mailto:contact@ay-group.net",
      color: "text-nugget hover:text-straw"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+968 22512731",
      action: "tel:+96822512731",
      color: "text-nugget hover:text-straw"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      value: "Muscat – Azaiba, Oman",
      action: "https://maps.google.com",
      color: "text-silver/70"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website",
      value: "www.ay-group.net",
      action: "https://www.ay-group.net",
      color: "text-nugget hover:text-straw"
    }
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/aygroupinv',
      icon: Facebook,
      color: '#1877F2'
    },
    {
      name: 'Instagram', 
      url: 'https://www.instagram.com/aygroupin',
      icon: Instagram,
      color: '#E4405F'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/ay-group-for-investments/',
      icon: Linkedin,
      color: '#0A66C2'
    }
  ]

  const businessHours = [
    { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" }
  ]

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-cod-gray/90 to-cod-gray">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center mb-6 px-6 py-2 bg-nugget/10 border border-nugget/20 rounded-full"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <MessageSquare className="w-5 h-5 text-nugget mr-2" />
            <span className="text-nugget font-medium">CONNECT WITH US</span>
          </motion.div>
          <h1 className="text-6xl md:text-7xl font-bold text-silver mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
            Let's <span className="text-nugget">Collaborate</span>
          </h1>
          <p className="text-2xl text-silver/70 max-w-3xl mx-auto leading-relaxed">
            Ready to shape the future together? Get in touch with our team
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-silver mb-8 flex items-center">
              <ArrowRight className="w-8 h-8 text-nugget mr-4" />
              <span>Get In Touch</span>
            </h2>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-4 bg-tundora/30 backdrop-blur-sm border border-nugget/10 rounded-xl hover:border-nugget/30 transition-all duration-300 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-nugget to-straw rounded-lg flex items-center justify-center text-cod-gray group-hover:rotate-6 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <div className="text-silver font-medium">{method.title}</div>
                    <div className={`${method.color} transition-colors`}>
                      {method.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-silver mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-br from-nugget to-straw rounded-lg flex items-center justify-center mr-4 text-cod-gray">
                  <User className="w-5 h-5" />
                </span>
                <span>Follow Our Journey</span>
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-tundora/30 backdrop-blur-sm border border-nugget/20 rounded-xl flex items-center justify-center hover:border-nugget transition-all duration-300"
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      backgroundColor: `${social.color}20`,
                      boxShadow: `0 10px 25px ${social.color}40`
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    <social.icon 
                      className="w-6 h-6" 
                      style={{ color: social.color }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="name" className="block text-silver/80 mb-2 ml-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-tundora/30 border border-nugget/20 rounded-xl text-silver placeholder-silver/50 focus:border-nugget focus:outline-none transition-all duration-300 hover:border-nugget/40"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="email" className="block text-silver/80 mb-2 ml-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-tundora/30 border border-nugget/20 rounded-xl text-silver placeholder-silver/50 focus:border-nugget focus:outline-none transition-all duration-300 hover:border-nugget/40"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-silver/80 mb-2 ml-1">Your Message</label>
                <textarea
                  id="message"
                  rows="6"
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-tundora/30 border border-nugget/20 rounded-xl text-silver placeholder-silver/50 focus:border-nugget focus:outline-none resize-none transition-all duration-300 hover:border-nugget/40"
                  required
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  type="submit"
                  className={`w-full px-6 py-4 rounded-xl flex items-center justify-center gap-3 font-bold transition-all duration-300 ${
                    isSubmitted 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                      : 'bg-gradient-to-r from-nugget to-straw text-cod-gray hover:from-straw hover:to-nugget'
                  }`}
                  whileHover={!isSubmitted ? { scale: 1.02, y: -2 } : {}}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitted ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>

            {/* Business Hours */}
            <motion.div
              className="mt-12 p-8 bg-tundora/20 backdrop-blur-sm border border-nugget/20 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-nugget mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3" />
                <span>Business Hours</span>
              </h3>
              <div className="space-y-4">
                {businessHours.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-nugget/10 last:border-0"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <span className="text-silver/70">{item.day}</span>
                    <span className={`font-medium ${
                      item.time === 'Closed' ? 'text-red-400' : 'text-silver'
                    }`}>
                      {item.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact