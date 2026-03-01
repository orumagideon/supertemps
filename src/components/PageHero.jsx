import { motion } from 'framer-motion'

function PageHero({ title, subtitle, image }) {
  const MotionDiv = motion.div

  return (
    <section className="relative overflow-hidden">
      <img src={image} alt={title} className="h-[46vh] min-h-[320px] w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-[#0f1e45]/75" />
      <div className="absolute inset-0">
        <div className="section-shell flex h-full items-center">
          <MotionDiv
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>
            <p className="mt-4 text-lg text-slate-200">{subtitle}</p>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}

export default PageHero
