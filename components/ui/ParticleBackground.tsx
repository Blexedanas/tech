'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let width = canvas.width = window.innerWidth
        let height = canvas.height = window.innerHeight

        const isMobile = width < 768
        const particles: { x: number, y: number, vx: number, vy: number, radius: number }[] = []
        const particleCount = isMobile ? 25 : 80 // Significantly fewer particles on mobile
        const mouse = { x: width / 2, y: height / 2, radius: isMobile ? 100 : 150 }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 1,
                vy: (Math.random() - 0.5) * 1,
                radius: Math.random() * 2 + 1
            })
        }

        const handleResize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }

        window.addEventListener('resize', handleResize)
        window.addEventListener('mousemove', handleMouseMove)

        function animate() {
            ctx!.clearRect(0, 0, width, height)

            for (let i = 0; i < particleCount; i++) {
                const p = particles[i]

                // Move
                p.x += p.vx
                p.y += p.vy

                // Bounce off edges
                if (p.x < 0 || p.x > width) p.vx *= -1
                if (p.y < 0 || p.y > height) p.vy *= -1

                // Mouse interaction - repel
                const dx = mouse.x - p.x
                const dy = mouse.y - p.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius
                    const dirX = dx / distance
                    const dirY = dy / distance
                    p.x -= dirX * force * 2
                    p.y -= dirY * force * 2
                }

                // Draw Particle
                ctx!.beginPath()
                ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
                ctx!.fillStyle = 'rgba(163, 9, 39, 0.3)' // Primary color with opacity
                ctx!.fill()

                // Draw connections
                for (let j = i; j < particleCount; j++) {
                    const p2 = particles[j]
                    const distCheck = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2)

                    if (distCheck < 100) {
                        ctx!.beginPath()
                        ctx!.moveTo(p.x, p.y)
                        ctx!.lineTo(p2.x, p2.y)
                        ctx!.strokeStyle = `rgba(163, 9, 39, ${0.15 - distCheck / 100 * 0.15})`
                        ctx!.lineWidth = 1
                        ctx!.stroke()
                    }
                }
            }

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen"
        />
    )
}
