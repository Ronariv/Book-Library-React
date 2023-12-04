import React, { useEffect, useState } from "react"
import '../App'
import { API_URL } from '../API'
import axios from "axios"
import { useAppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"

const BookList = () => {
  const [books, setBooks] = useState([])
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(API_URL).then(res => {
      console.log(res.data)
      setBooks(res.data)
    }).catch(err => console.log(err))
  }, [])

  const handleFavorite = (id) => {
    const isFavorite = favorites.some((book) => book.id === id)

    return isFavorite
  }
  console.log(favorites)
  return (
    <div className="container">

      <h1>Books</h1>
      <div className="book-list container">

        {books.map((book) => (
          <div key={book.id} className="book" >
            <h2>{book.title}</h2>
            <img src={book.image_url} alt="#" onClick={() => navigate(`/books/${book.id}`)}/>

            {handleFavorite(book.id)
              ? (<button onClick={() => removeFromFavorites(book.id)}>
                Remove From Favorites
              </button>)
              : (<button onClick={() => addToFavorites(book)}>
                Add to Favorites
              </button>)
            }

          </div>
        ))}
      </div>
    </div>

  )
}

export default BookList