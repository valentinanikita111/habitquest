import React from 'react'

export default function Team(){
  const members = ['Valentina Kuling Agudelo','Salome Perez Loaiza','Juliana Mesa Rodríguez','Nicol Patiño Arroyave']
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Nuestro equipo</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {members.map(m=> (
            <div key={m} className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl text-center border border-white/4 transform hover:-translate-y-3 transition"> 
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mb-3 shadow-lg"></div>
              <div className="font-semibold">{m}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
