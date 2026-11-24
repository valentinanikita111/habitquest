import React from 'react'

export default function Footer(){
  return (
    <footer className="py-8 mt-16 bg-transparent text-slate-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <div className="font-bold text-xl">HabitQuest</div>
          <div className="text-sm text-slate-400">Proyecto escolar — Nombre de la institución educativa</div>
        </div>
        <div className="mt-4 md:mt-0 text-sm text-slate-400">
          <div>Contacto: info@habitquest.example</div>
          <div className="mt-1">© {new Date().getFullYear()} HabitQuest</div>
        </div>
      </div>
    </footer>
  )
}
