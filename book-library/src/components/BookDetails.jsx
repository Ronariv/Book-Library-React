import React, { useEffect, useState } from "react"
import '../App'
import { useParams } from "react-router"
import { BOOK_DETAILS_URL } from "../API"
import axios from "axios"

export default function BookDetails() {
  const [ book, setBook ] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios.get(`${BOOK_DETAILS_URL}/${id}`)
    .then(res => {
      setBook(res.data)
      console.log(res.data)
    }).catch(err => console.log(err))
  }, [id])

  return (
    <div className="book-details container">
      {/* avoid error by using ? optional chaining*/}
      <div className="book-details-head">
        <h1>{book?.title}</h1>
        <img src={book?.image_url} alt="#" />
      </div>
      <div className="book-details-tail">
        <h2>Description</h2>
        <p>{book?.description}</p>
        <h2>Author</h2>
        <p>{book?.authors}</p>
        <h2>Genres</h2>
        <p>{book?.genres}</p>
      </div>

    </div>
  )
}