import { Route, Routes } from 'react-router-dom'
import { Exo, Home } from './pages'
import { Footer } from './components'
import './App.css'

function App() {

  return (
      <div>
        <Routes>
          <Route path='/' element={<Home /> }/>
          <Route path='/exo/:id' element={<Exo /> }/>
        </Routes>
        <Footer />
      </div>
  )
}

export default App
