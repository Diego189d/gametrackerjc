import React, { useState } from 'react'

export default function Explore({ onSearch }){
  const [q,setQ] = useState('')
  const [platform,setPlatform] = useState('')
  const [status,setStatus] = useState('')

  function submit(e){
    e.preventDefault()
    const params = new URLSearchParams()
    if(q) params.append('search', q)
    if(platform) params.append('platform', platform)
    if(status) params.append('status', status)
    onSearch('?' + params.toString())
  }

  return (
    <form onSubmit={submit} className="card form">
      <h2>Explorar Juegos</h2>
      <label>Buscar
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Nombre o palabra clave" />
      </label>
      <label>Plataforma
        <input value={platform} onChange={e=>setPlatform(e.target.value)} placeholder="PC, PS5, Switch..." />
      </label>
      <label>Estado
        <select value={status} onChange={e=>setStatus(e.target.value)}>
          <option value="">Cualquiera</option>
          <option>Pendiente</option>
          <option>Jugando</option>
          <option>Completado</option>
        </select>
      </label>
      <button className="btn" type="submit">Buscar</button>
    </form>
  )
}
