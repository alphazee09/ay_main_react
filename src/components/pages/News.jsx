import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, X } from 'lucide-react'

const News = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedBlog, setSelectedBlog] = useState(null)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const response = await fetch('https://g8h3ilc1ezzv.manus.space/api/blogs')
      const data = await response.json()
      setBlogs(data)
    } catch (error) {
      console.error('Error fetching blogs:', error)
      // Fallback to static data if API fails
      setBlogs([
        {
          id: 1,
          title: "AY Group Launches Quantum Computing Initiative",
          content: "Revolutionary breakthrough in quantum computing technology set to transform business operations worldwide.",
          excerpt: "Revolutionary breakthrough in quantum computing technology set to transform business operations worldwide.",
          created_at: "2024-12-15T00:00:00Z",
          author: "AYGroup",
          category: "Technology"
        },
        {
          id: 2,
          title: "Sustainable Construction Project Wins Global Award",
          content: "Our eco-friendly construction division receives international recognition for innovative green building solutions.",
          excerpt: "Our eco-friendly construction division receives international recognition for innovative green building solutions.",
          created_at: "2024-12-10T00:00:00Z",
          author: "AYGroup",
          category: "Construction"
        },
        {
          id: 3,
          title: "AI-Powered Logistics Platform Launches",
          content: "Next-generation logistics management system powered by artificial intelligence now available globally.",
          excerpt: "Next-generation logistics management system powered by artificial intelligence now available globally.",
          created_at: "2024-12-05T00:00:00Z",
          author: "AYGroup",
          category: "Logistics"
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const openBlogModal = (blog) => {
    setSelectedBlog(blog)
  }

  const closeBlogModal = () => {
    setSelectedBlog(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen py-20 px-4 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-16 h-16 border-4 border-nugget border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-silver text-lg">Loading latest news...</p>
        </motion.div>
      </div>
    )
  }

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
            Latest <span className="text-nugget">News</span>
          </h1>
          <p className="text-xl text-silver/70 max-w-3xl mx-auto">
            Stay updated with our latest innovations and achievements
          </p>
        </motion.div>

        {blogs.length === 0 ? (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl text-nugget mb-4">📰</div>
            <h3 className="text-2xl text-silver mb-4">No News Yet</h3>
            <p className="text-silver/70">Check back soon for the latest updates from AY Group.</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                className="p-6 bg-tundora/30 backdrop-blur-sm border border-nugget/20 rounded-xl cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => openBlogModal(blog)}
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-nugget/20 text-nugget text-xs rounded-full">
                    {blog.category || 'News'}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-silver mb-3 leading-tight">
                  {blog.title}
                </h3>
                
                <p className="text-silver/70 mb-4 leading-relaxed line-clamp-3">
                  {blog.excerpt || blog.content.substring(0, 150) + '...'}
                </p>
                
                <div className="flex items-center justify-between text-sm text-silver/60 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(blog.created_at)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                </div>
                
                <motion.div
                  className="flex items-center gap-2 text-nugget font-medium"
                  whileHover={{ gap: 8 }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.article>
            ))}
          </div>
        )}
      </div>

      {/* Blog Modal */}
      {selectedBlog && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-tundora/90 backdrop-blur-lg border border-nugget rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-tundora/95 backdrop-blur-lg border-b border-scorpion p-6 flex items-center justify-between">
              <div>
                {selectedBlog.category && (
                  <div className="inline-block px-3 py-1 bg-nugget/20 border border-nugget/50 rounded-full text-nugget text-sm font-medium mb-2">
                    {selectedBlog.category}
                  </div>
                )}
                <h2 className="text-2xl font-bold text-silver">{selectedBlog.title}</h2>
                <div className="flex items-center gap-4 text-sm text-silver/60 mt-2">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{selectedBlog.author}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(selectedBlog.created_at)}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeBlogModal}
                className="text-silver hover:text-nugget transition-colors duration-300 p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="prose prose-invert max-w-none">
                <div className="text-silver/80 leading-relaxed whitespace-pre-line">
                  {selectedBlog.content}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default News

