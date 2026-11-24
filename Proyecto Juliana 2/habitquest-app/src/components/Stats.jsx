import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

function CircularProgress({value=72, size=120, stroke=10, color='linear-gradient(90deg,#70439d,#bd98ec)'}){
  const radius = (size - stroke) / 2
  const circ = 2 * Math.PI * radius
  const controls = useAnimation()

  useEffect(()=>{
    controls.start({ pathOffset: 1 - value/100, transition: { duration: 1.2, ease: 'easeOut' } })
  },[value, controls])

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <linearGradient id="g1" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#70439d" />
          <stop offset="100%" stopColor="#bd98ec" />
        </linearGradient>
      </defs>
      <g transform={`translate(${size/2}, ${size/2})`}>
        <circle r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
        <motion.circle
          r={radius}
          fill="none"
          stroke="url(#g1)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ}
          initial={{ pathOffset: 1 }}
          animate={controls}
          style={{ rotate: -90 }}
        />
      </g>
    </svg>
  )
}

export default function Stats({percent=72, bars=[60,48,30]}){
  return (
    <div className="p-4 bg-slate-800 rounded-lg">
      <h3 className="font-semibold mb-3">Estadísticas</h3>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <CircularProgress value={percent} />
          <div>
            <div className="text-2xl font-bold">{percent}%</div>
            <div className="text-sm text-slate-400">cumplimiento</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="space-y-3">
            {bars.map((b,i)=> (
              <div key={i} className="flex items-center gap-3">
                <div className="w-24 text-sm text-slate-300">Hábito {i+1}</div>
                <div className="flex-1 bg-slate-900 rounded h-3">
                  <motion.div className="h-3 rounded" initial={{width:0}} animate={{width:`${b}%`}} style={{background:'linear-gradient(90deg,#70439d,#bd98ec)'}} transition={{duration:1.2}} />
                </div>
                <div className="w-12 text-sm text-slate-300 text-right">{b}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
