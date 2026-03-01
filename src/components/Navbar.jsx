import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { primaryNav, servicesMenu } from '../data/navigation'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const MotionDiv = motion.div

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition ${isActive ? 'text-[#c8a44f]' : 'text-white hover:text-[#e2c67f]'}`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1e45]/95 backdrop-blur-md">
      <div className="section-shell py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-lg font-bold tracking-wide text-white md:text-xl">
            Supertemps International Ltd
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {primaryNav.slice(0, 2).map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass}>
                {item.label}
              </NavLink>
            ))}

            <div className="relative">
              <button
                onClick={() => setServicesOpen((prev) => !prev)}
                className="flex items-center gap-1 text-sm font-semibold text-white transition hover:text-[#e2c67f]"
              >
                Services <ChevronDown size={16} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <MotionDiv
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute left-0 top-9 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg"
                  >
                    {servicesMenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setServicesOpen(false)}
                        className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </MotionDiv>
                )}
              </AnimatePresence>
            </div>

            {primaryNav.slice(2).map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button className="text-white lg:hidden" onClick={() => setMobileOpen((prev) => !prev)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <MotionDiv
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-1 rounded-2xl bg-white/10 p-4 lg:hidden"
            >
              {primaryNav.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-2 border-t border-white/20 pt-2">
                <p className="px-3 pb-1 text-xs uppercase tracking-wide text-[#e2c67f]">Services</p>
                {servicesMenu.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar
