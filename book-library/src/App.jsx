import { Routes,Route } from 'react-router-dom'
import './style.css'
import BookList from './components/BookList'
import BookDetails from './components/BookDetails'
import Favorite from './components/Favorite'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return(
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<BookList />}/>
        <Route path='/books/:id' element={<BookDetails />}/>
        <Route path='/favorite' element={<Favorite />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App