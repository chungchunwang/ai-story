import { useEffect, useRef } from 'react'

const canvasStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -100,
  opacity: 0.8,
  background-color: 'black'
}

const NetworkBackground = () => {
  const canvasRef = useRef(null)
  const dots = useRef([])
  const animationFrameId = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      initDots()
    }

    const initDots = () => {
      const numDots = Math.floor((width * height) / 15000)
      dots.current = Array.from({ length: numDots }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }))
    }

    const drawDots = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = 'rgba(64, 196, 255, 0.5)'

      dots.current.forEach((dot, i) => {
        dot.x += dot.vx
        dot.y += dot.vy

        if (dot.x < 0 || dot.x > width) dot.vx *= -1
        if (dot.y < 0 || dot.y > height) dot.vy *= -1

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections
        dots.current.forEach((otherDot, j) => {
          if (i === j) return
          const dx = dot.x - otherDot.x
          const dy = dot.y - otherDot.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(64, 196, 255, ${0.2 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(dot.x, dot.y)
            ctx.lineTo(otherDot.x, otherDot.y)
            ctx.stroke()
          }
        })
      })

      animationFrameId.current = requestAnimationFrame(drawDots)
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    drawDots()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={canvasStyles}
    />
  )
}

export default NetworkBackground 
