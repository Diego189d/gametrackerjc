import React, { useState, useEffect } from 'react'
import GameForm from './components/GameForm'
import GameList from './components/GameList'
import Reviews from './components/Reviews'
import Explore from './components/Explore'

const API = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

export default function App(){
  const [view, setView] = useState('library')
  const [games, setGames] = useState([])

  useEffect(()=>{ fetchGames() },[])

  async function fetchGames(q=''){
    const res = await fetch(API + '/games' + q)
    const data = await res.json()
    setGames(data)
  }
  async function addGame(g){
    await fetch(API + '/games', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(g)})
    await fetchGames()
    setView('library')
  }
  async function deleteGame(id){
    await fetch(API + '/games/' + id, {method:'DELETE'})
    await fetchGames()
  }
  async function updateGame(id, upd){
    await fetch(API + '/games/' + id, {method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(upd)})
    await fetchGames()
  }

  return (
    <div className="app">
      <header className="top">
        <h1><span className="accent">Game</span>Tracker</h1>
        <nav>
          <button onClick={()=>setView('library')}>Biblioteca</button>
          <button onClick={()=>setView('add')}>Agregar Juego</button>
          <button onClick={()=>setView('reviews')}>Reseñas</button>
          <button onClick={()=>setView('explore')}>Explorar</button>
        </nav>
      </header>
      <main>
        {view==='library' && <GameList games={games} onDelete={deleteGame} onUpdate={updateGame} />}
        {view==='add' && <GameForm onAdd={addGame} />}
        {view==='reviews' && <Reviews games={games} />}
        {view==='explore' && <Explore onSearch={fetchGames} />}
      </main>
    </div>
  )
}
