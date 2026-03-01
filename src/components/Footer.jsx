import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'

function Footer() {
  return (
    <footer className="mt-16 bg-corporate-gradient text-slate-100">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold">Supertemps International Ltd</h3>
          <p className="mt-3 max-w-sm text-sm text-slate-300">U Imagine We Deliver</p>
          <div className="mt-5 flex gap-3 text-slate-200">
            <span className="rounded-full border border-white/20 p-2"><Facebook size={16} /></span>
            <span className="rounded-full border border-white/20 p-2"><Twitter size={16} /></span>
            <span className="rounded-full border border-white/20 p-2"><Linkedin size={16} /></span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/divisions">Divisions</Link></li>
            <li><Link to="/why-us">Why Us</Link></li>
            <li><Link to="/partners">Partners</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-3 space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5" /> +254 708 415 247</li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5" /> supertempsinternational@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5" /> Dunga Road Industrial Area, Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-300">
        © {new Date().getFullYear()} Supertemps International Ltd. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
