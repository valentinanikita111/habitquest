import React, { useEffect, useState } from 'react'
import { useAuth } from '../auth/AuthContext'
import { subscribeUserChallenges } from '../firestore'
import Stats from './Stats'
import { Link } from 'react-router-dom'

export default function Dashboard(){
  const { user, logout } = useAuth()
  const [challenges, setChallenges] = useState([])
  useEffect(()=>{
    if(!user) return
    const unsub = subscribeUserChallenges(user.uid, setChallenges)
    return unsub
  },[user])

  const completed = challenges.filter(c=>c.completed).length
  const total = challenges.length

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="container mx-auto p-6">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-3">
            <div className="text-slate-300">{user?.displayName || user?.email}</div>
            <button className="btn ghost" onClick={()=>logout()}>Salir</button>
            <Link to="/" className="text-slate-400">Landing</Link>
          </div>
        </header>
        <div className="grid md:grid-cols-3 gap-4">
          <Stats percent={total?Math.round((completed/total)*100):0} bars={[72,48,30]} />
          <div className="p-4 bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg"> <h3 className="font-semibold">Streaks</h3> <div className="text-2xl mt-2">--</div></div>
          <div className="p-4 bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg"> <h3 className="font-semibold">Nivel</h3> <div className="text-2xl mt-2">1</div></div>
        </div>
        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Mis retos</h2>
          <div className="space-y-2">
            {challenges.map(c=> (
              <div key={c.id} className="p-3 bg-slate-800 rounded flex justify-between items-center">
                <div>
                  {c.title}
                  <div className="text-sm text-slate-400">{c.freq}</div>
                </div>
                <div>
                  <span className={`px-3 py-1 rounded ${c.completed? 'bg-green-500 text-slate-900':'bg-slate-700 text-slate-300'}`}>{c.completed? 'Completado':'Pendiente'}</span>
                </div>
              </div>
            ))}
            {challenges.length===0 && <div className="text-slate-400">Aún no tienes retos.</div>}
          </div>
        </section>
      </div>
    </div>
  )
}
