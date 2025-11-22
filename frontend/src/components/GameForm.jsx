import React, { useState } from 'react'

export default function GameForm({ onAdd }){
  const [name,setName] = useState('')
  const [platform,setPlatform] = useState('')
  const [status,setStatus] = useState('Pendiente')
  const [review,setReview] = useState('')
  const [score,setScore] = useState('')

  function submit(e){
    e.preventDefault()
    const payload = { name, platform, status, review, score: score? Number(score): undefined }
    onAdd(payload)
    setName(''); setPlatform(''); setStatus('Pendiente'); setReview(''); setScore('')
  }

  return (
    <form onSubmit={submit} className="card form">
      <h2>Agregar Juego</h2>
      <label>Nombre
        <input value={name} onChange={e=>setName(e.target.value)} required />
      </label>
      <label>Plataforma
        <input value={platform} onChange={e=>setPlatform(e.target.value)} />
      </label>
      <label>Estado
        <select value={status} onChange={e=>setStatus(e.target.value)}>
          <option>Pendiente</option>
          <option>Jugando</option>
          <option>Completado</option>
        </select>
      </label>
      <label>Reseña
        <textarea value={review} onChange={e=>setReview(e.target.value)} />
      </label>
      <label>Puntuación (0-10)
        <input type="number" min="0" max="10" value={score} onChange={e=>setScore(e.target.value)} />
      </label>
      <button type="submit" className="btn">Guardar</button>
    </form>
  )
}
