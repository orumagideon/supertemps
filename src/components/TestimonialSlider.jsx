import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function TestimonialSlider({ items }) {
  const [index, setIndex] = useState(0)
  const MotionDiv = motion.div

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length)
    }, 4200)

    return () => clearInterval(timer)
  }, [items.length])

  return (
    <div className="card-base overflow-hidden bg-corporate-gradient text-white">
      <AnimatePresence mode="wait">
        <MotionDiv
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-lg leading-relaxed text-slate-100">“{items[index].quote}”</p>
          <p className="mt-4 text-sm font-semibold text-[#e2c67f]">{items[index].name}</p>
        </MotionDiv>
      </AnimatePresence>
    </div>
  )
}

export default TestimonialSlider
