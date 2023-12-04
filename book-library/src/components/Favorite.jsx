import { useEffect, useState } from "react"
import { useAppContext } from "../context/AppContext"


export default function Favorite() {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext()

  const handleFavorite = (id) => {
    const isFavorite = favorites.some((book) => book.id === id)

    return isFavorite
  }

  return (
    <div className="container">
      <h1>Favorites</h1>
      <div className="book-list container">

        {favorites.length > 0 ? 
        favorites.map((favorite) => (
          <div key={favorite.id} className="book">
            <h2>{favorite.title}</h2>
            <img src={favorite.image_url} alt="#" />

            {handleFavorite(favorite.id)
              ? (<button onClick={() => removeFromFavorites(favorite.id)}>
                Remove From Favorites
              </button>)
              : (<button onClick={() => addToFavorites(favorite)}>
                Add to Favorites
              </button>)
            }

          </div>
        )) : <h2>No favorites yet</h2>}
      </div>
    </div>
  )
}