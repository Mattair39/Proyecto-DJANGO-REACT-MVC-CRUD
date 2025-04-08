import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <h1> Página de Libros </h1>
      <div>
        <input type="text" placeholder="Título del Libro" />
        <input type="number" placeholder="Fecha de Publicación" />
        <button> Agregar Libro </button>
      </div>
    </>
  )
}

export default App
