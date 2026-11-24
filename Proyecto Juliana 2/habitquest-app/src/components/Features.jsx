import React from 'react'

const FeatureCard = ({icon, title, children})=> (
  <div className="p-4 bg-slate-800 rounded-lg">
    <div className="text-2xl">{icon}</div>
    <h3 className="mt-2 font-semibold">{title}</h3>
    <p className="mt-1 text-slate-300 text-sm">{children}</p>
  </div>
)

export default function Features(){
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Funcionalidades principales</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon={<span className="text-3xl">📝</span>} title="Creación de hábitos">Define hábitos personalizados con frecuencia y recordatorios.</FeatureCard>
          <FeatureCard icon={<span className="text-3xl">📅</span>} title="Seguimiento diario">Registra tu cumplimiento y visualiza tus streaks.</FeatureCard>
          <FeatureCard icon={<span className="text-3xl">🔔</span>} title="Recordatorios">Notificaciones automáticas para mantener la consistencia.</FeatureCard>
          <FeatureCard icon={<span className="text-3xl">🏆</span>} title="Recompensas">Gana puntos, subir de nivel y consigue badges.</FeatureCard>
          <FeatureCard icon={<span className="text-3xl">📊</span>} title="Estadísticas">Gráficas y porcentajes que muestran tu progreso.</FeatureCard>
          <FeatureCard icon={<span className="text-3xl">🤝</span>} title="Retos">Participa en retos grupales o personales.</FeatureCard>
        </div>
      </div>
    </section>
  )
}
