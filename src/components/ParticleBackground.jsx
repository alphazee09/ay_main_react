import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ParticleBackground = () => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const particles = particlesRef.current

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class
    class Particle {
      constructor() {
        this.reset()
        this.y = Math.random() * canvas.height
        this.fadeDelay = Math.random() * 600
        this.fadeStart = Date.now() + this.fadeDelay
        this.fadingOut = false
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.z = Math.random() * 1000 + 1
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.2
        this.color = Math.random() > 0.7 ? '#bc9e24' : Math.random() > 0.5 ? '#d6c78b' : '#c4c4c4'
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulseOffset = Math.random() * Math.PI * 2
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Wrap around screen
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0

        // Pulse effect
        const pulse = Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.5 + 0.5
        this.currentRadius = this.radius * (0.5 + pulse * 0.5)
        this.currentOpacity = this.opacity * (0.3 + pulse * 0.7)
      }

      draw(ctx) {
        ctx.save()
        
        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.currentRadius * 3
        )
        gradient.addColorStop(0, `${this.color}${Math.floor(this.currentOpacity * 255).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(0.5, `${this.color}${Math.floor(this.currentOpacity * 0.3 * 255).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(1, `${this.color}00`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.currentRadius * 3, 0, Math.PI * 2)
        ctx.fill()

        // Core particle
        ctx.fillStyle = `${this.color}${Math.floor(this.currentOpacity * 255).toString(16).padStart(2, '0')}`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      }

      drawConnection(ctx, other) {
        const dx = other.x - this.x
        const dy = other.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const opacity = (1 - distance / 150) * 0.1
          ctx.save()
          ctx.strokeStyle = `#bc9e24${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(other.x, other.y)
          ctx.stroke()
          ctx.restore()
        }
      }
    }

    // Initialize particles
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))
    particles.length = 0
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update()
        particle.draw(ctx)

        // Draw connections to nearby particles
        for (let j = index + 1; j < particles.length; j++) {
          particle.drawConnection(ctx, particles[j])
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <>
      {/* Canvas for dynamic particles */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Static decorative particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-nugget rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute border border-nugget/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Scanning lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-nugget/30 to-transparent"
          style={{ top: '20%' }}
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-straw/20 to-transparent"
          style={{ top: '60%' }}
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-nugget/20 to-transparent"
          style={{ left: '30%' }}
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Data stream effect */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute text-nugget/20 font-mono text-xs whitespace-nowrap"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {Array.from({ length: 20 }, () => 
              Math.random().toString(36).substring(2, 4)
            ).join(' ')}
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default ParticleBackground

