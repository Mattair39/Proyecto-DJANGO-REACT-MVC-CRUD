import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [books,setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  },[]);

  const fetchBooks = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/books/")
        const data = await response.json()
        setBooks(data);
      } catch (err) {
        console.log(err);
      }
  };
  

  return (
    <>
      <h1> Página de Libros </h1>
      <div>
        <input type="text" placeholder="Título del Libro" />
        <input type="number" placeholder="Fecha de Publicación" />
        <button> Agregar Libro </button>
      </div>
    {books.map((book) => (
      <div>
        <p>Título: {book.bookTitle}</p>
        <p>Año de Publicación: {book.release_year} </p>
      </div>
    ))}
    </>
  )
}

export default App
