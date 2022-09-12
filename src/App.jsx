import { Route, Routes } from 'react-router-dom'
import { Exo, Home } from './pages'
import { Footer } from './components'
import './App.css'

function App() {

  return (
      <div>
        <main id='main'>
          <Routes>
            <Route path='/' element={<Home /> }/>
            <Route path='/exo/:id' element={<Exo /> }/>
          </Routes>
        </main>
        <Footer />
      </div>
  )
}

export default App
