import { createContext, useContext, useState } from "react";

const AppContext = createContext()

export const useAppContext = () => {
  const context = useContext(AppContext)

  if(context === undefined){
    throw new Error('AppContext must be within AppContextProvider')
  }

  return context
}

const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const addToFavorites = (book) => {
    //spread favorite yang lama
    const oldFavorites = [...favorites]

    const newFavorites = oldFavorites.concat(book)

    setFavorites(newFavorites)
  }

  const removeFromFavorites = (id) => {
    const oldFavorites = [...favorites]
    const newFavorites = oldFavorites.filter((book) => book.id !== id)
    
    setFavorites(newFavorites)
  }

  return (
    <AppContext.Provider 
      value = {{ favorites, addToFavorites, removeFromFavorites}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider