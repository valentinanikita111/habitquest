import React from 'react'
import { Link } from 'react-router-dom'
import Hero from './Hero'
import Features from './Features'
import Team from './Team'
import Footer from './Footer'
import Retos from './Retos'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="container mx-auto p-6">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">HabitQuest</h1>
          <nav className="space-x-4">
            <Link to="/login" className="text-slate-300">Iniciar sesión</Link>
            <Link to="/register" className="px-3 py-1 rounded bg-gradient-to-r from-violet-700 to-purple-500 text-white font-semibold">Registro</Link>
          </nav>
        </header>
        <main>
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <Hero />
          </motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6, delay:0.1}}>
            <Features />
          </motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6, delay:0.2}}>
            <Retos />
          </motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6, delay:0.3}}>
            <Team />
          </motion.div>
          <Footer />
        </main>
      </div>
    </div>
  )
}
