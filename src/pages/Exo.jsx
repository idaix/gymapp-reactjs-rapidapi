import React from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../components'

const Exo = () => {
  const { id } = useParams()
  console.log(id);
  return (
    <div>
      <Navbar />
      Exo id: {id}
    </div>
  )
}

export default Exo