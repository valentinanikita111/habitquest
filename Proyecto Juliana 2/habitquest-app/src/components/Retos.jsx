import React, { useEffect, useState } from 'react'
import { addChallenge, subscribeUserChallenges, updateChallenge } from '../firestore'
import { useAuth } from '../auth/AuthContext'

export default function Retos(){
  const { user } = useAuth()
  const [challenges, setChallenges] = useState([])
  useEffect(()=>{
    if(!user) return
    const unsub = subscribeUserChallenges(user.uid, setChallenges)
    return unsub
  },[user])

  async function handleCreate(e){
    e.preventDefault()
    const f = new FormData(e.target)
    const title = f.get('title')
    const freq = f.get('freq')
    const days = Number(f.get('days')||7)
    const reward = f.get('reward')
    if(!title) return
    await addChallenge(user.uid, {title, freq, days, reward, createdAt: Date.now(), completed: false})
    e.target.reset()
  }

  return (
    <section className="py-10">
      <div className="container mx-auto grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-slate-800 rounded-lg">
          <h3 className="font-semibold mb-3">Crear reto</h3>
          {!user && <div className="text-sm text-slate-400">Inicia sesión para crear retos.</div>}
          {user && (
            <form onSubmit={handleCreate} className="flex flex-col gap-3">
              <input name="title" placeholder="Nombre del reto" className="p-2 rounded bg-slate-900" required />
              <select name="freq" className="p-2 rounded bg-slate-900">
                <option value="daily">Diario</option>
                <option value="weekly">Semanal</option>
              </select>
              <input name="days" type="number" min="1" defaultValue={7} className="p-2 rounded bg-slate-900" />
              <input name="reward" placeholder="Recompensa" className="p-2 rounded bg-slate-900" />
              <div>
                <button className="btn primary">Crear reto</button>
              </div>
            </form>
          )}
        </div>
        <div className="p-4 bg-slate-800 rounded-lg">
          <h3 className="font-semibold mb-3">Mis retos</h3>
          <div className="space-y-2">
            {challenges.map(c=> (
              <div key={c.id} className="p-3 bg-slate-900 rounded flex justify-between items-center">
                <div>
                  <strong>{c.title}</strong>
                  <div className="text-sm text-slate-400">{c.freq} · {c.days} días · {c.reward}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className={`px-3 py-1 rounded ${c.completed? 'bg-green-500 text-slate-900':'bg-slate-700 text-slate-300'}`} onClick={()=> updateChallenge(c.id, {completed: !c.completed})}>
                    {c.completed? 'Completado' : 'Marcar'}
                  </button>
                </div>
              </div>
            ))}
            {challenges.length===0 && <div className="text-sm text-slate-400">No hay retos aún.</div>}
          </div>
        </div>
      </div>
    </section>
  )
}
