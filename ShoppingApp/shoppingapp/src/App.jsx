import React, { useEffect, useState } from 'react'
import Fashion from './Components/fashion.jsx'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setBooks(json))
  }, [])

  return (
    <div>
      {books.map((b, i) => (
        <Fashion key={i} {...b} />
      ))}
    </div>
  )
}

export default App
