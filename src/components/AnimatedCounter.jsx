import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function AnimatedCounter({ end, label, suffix = '+' }) {
  const [count, setCount] = useState(0)
  const MotionDiv = motion.div

  useEffect(() => {
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
  }, [end])

  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="card-base text-center"
    >
      <p className="text-4xl font-bold text-[#0f1e45]">{count}{suffix}</p>
      <p className="mt-2 text-slate-600">{label}</p>
    </MotionDiv>
  )
}

export default AnimatedCounter
