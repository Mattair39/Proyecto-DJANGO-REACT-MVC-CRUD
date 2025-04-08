import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [books,setBooks] = useState([]);
  const [bookTitle, setBookTitle] = useState("");	
  const [releaseYear, setReleaseYear] = useState(0); 

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
  
  const addBook = async () => {
    const bookData = {
      bookTitle: bookTitle,
      release_year: releaseYear
    };
    try {
    const response = await fetch("http://127.0.0.1:8000/api/books/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });

    const data = await response.json();
    setBooks((prev) => [...prev, data]);
  } catch (err) {
    console.log(err);
  }
};

  return (
    <>
      <h1> Página de Libros </h1>
      <div>
        <input type="text" 
        placeholder="Título del Libro" 
        onChange={(e) => setBookTitle(e.target.value)} 
        />
        <input type="number" 
        placeholder="Año de Publicación" 
        onChange={(e) => setReleaseYear(e.target.value)}
        />
        <button onClick={addBook}> Agregar Libro </button>
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
