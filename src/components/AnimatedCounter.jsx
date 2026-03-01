import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedCounter({ end, label, suffix = '+', className = '' }) {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)
  const isInView = useInView(counterRef, { once: true, amount: 0.35 })
  const MotionDiv = motion.div

  useEffect(() => {
    if (!isInView) return

    let current = 0
    const increment = Math.max(1, Math.floor(end / 80))
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 20)

    return () => clearInterval(timer)
  }, [end, isInView])

  return (
    <MotionDiv
      ref={counterRef}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={`rounded-2xl border p-6 text-center shadow-sm ${className}`}
    >
      <p className="text-4xl font-bold text-[#0f1e45]">{count}{suffix}</p>
      <p className="mt-2 text-slate-600">{label}</p>
    </MotionDiv>
  )
}

export default AnimatedCounter
