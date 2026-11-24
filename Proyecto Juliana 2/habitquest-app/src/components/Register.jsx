import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    setError('')
    setLoading(true)
    const form = new FormData(e.target)
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    const confirm = form.get('confirm')
    if(password !== confirm){ setError('Las contraseñas no coinciden'); setLoading(false); return }
    try{
      const userCred = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(userCred.user, { displayName: name })
      navigate('/')
    }catch(err){
      setError(err.message)
    }finally{setLoading(false)}
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100">
      <div className="max-w-md w-full p-6">
        <h2 className="text-2xl font-bold mb-4">Crear cuenta</h2>
        {error && <div className="mb-3 text-red-400">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form">
          <label>Nombre completo<input name="name" required /></label>
          <label>Correo electrónico<input name="email" type="email" required /></label>
          <label>Contraseña<input name="password" type="password" required /></label>
          <label>Confirmar contraseña<input name="confirm" type="password" required /></label>
          <div className="mt-4 flex gap-2">
            <button className="btn primary" type="submit" disabled={loading}>{loading ? 'Registrando...' : 'Registrar'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}
