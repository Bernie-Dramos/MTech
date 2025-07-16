"use client"

import { useEffect, useRef } from "react"

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const particles: Particle[] = []
    const numParticles = 100
    const maxDistance = 100 // Max distance for lines to connect

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    })

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1 // Particle size between 1 and 3
        this.speedX = Math.random() * 0.5 - 0.25 // Speed between -0.25 and 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.color = "rgba(74, 222, 255, 0.8)" // Tailwind cyan-400 with alpha
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX *= -1
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY *= -1
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function initParticles() {
      particles.length = 0 // Clear existing particles
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle())
      }
    }

    function connectParticles() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dist = Math.sqrt((particles[a].x - particles[b].x) ** 2 + (particles[a].y - particles[b].y) ** 2)
          if (dist < maxDistance) {
            ctx.strokeStyle = `rgba(74, 222, 255, ${1 - dist / maxDistance})` // Fade lines
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }
      connectParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    initParticles()
    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        initParticles()
      })
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-transparent" />
}
