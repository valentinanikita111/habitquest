import React from 'react'

import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="py-16 hero">
      <div className="container mx-auto hero-grid">
        <div className="hero-content">
          <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-5xl font-extrabold">Transforma tu vida un hábito a la vez</motion.h1>
          <motion.p initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.08}} className="mt-4 lead">Crea retos personales, sigue tu progreso y construye hábitos saludables de manera divertida y motivadora.</motion.p>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:0.16}} className="cta">
            <a href="/register" className="btn primary">Comenzar ahora</a>
            <a href="/../inicio.html" className="btn outline" style={{marginLeft:12}}>Ver demo</a>
          </motion.div>
        </div>
        <motion.div initial={{scale:.98,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.7}} className="hero-visual">
          <div className="mockup pulse">
            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json" background="transparent" speed="1" style={{width:160,height:160,margin:'0 auto 12px'}} loop autoplay></lottie-player>
            <div className="mockup-header">
              <div className="avatar"></div>
              <div className="level">Nivel <strong>7</strong></div>
            </div>
            <div className="calendar">
              <div className="week">
                <div className="day done">L</div>
                <div className="day done">M</div>
                <div className="day">M</div>
                <div className="day done">J</div>
                <div className="day">V</div>
                <div className="day">S</div>
                <div className="day">D</div>
              </div>
            </div>
            <div className="progress-row">
              <div className="progress-item">
                <div className="label">Meditación</div>
                <div className="bar"><div className="fill" style={{width:'72%'}}></div></div>
              </div>
              <div className="progress-item">
                <div className="label">Hidratación</div>
                <div className="bar"><div className="fill" style={{width:'48%'}}></div></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
