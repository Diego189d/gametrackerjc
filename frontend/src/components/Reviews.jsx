import React from 'react'

export default function Reviews({ games }){
  const reviews = games.filter(g=>g.review && g.review.trim().length>0)
  if(!reviews.length) return <div className="card"><p>No hay reseñas aún</p></div>
  return (
    <div>
      <h2>Reseñas</h2>
      {reviews.map(r=>(
        <article key={r._id} className="card">
          <h3>{r.name} <small className="meta">{r.platform}</small></h3>
          <p>{r.review}</p>
          {r.score!==undefined && <p>⭐ {r.score}/10</p>}
        </article>
      ))}
    </div>
  )
}
