import React from 'react'
import { Link } from 'react-router-dom'
import { ExoCard, HorizontalScroll, Loader } from '../components'

const SimilarExercise = ({ data }) => {
  if(!data.length) return <div className='text-center pt-5'><Loader /></div>
  
  return (
    <div>
      <HorizontalScroll>
        {data.map((exo, i)=>(
          <div className="min-w-max" key={i} >
            <Link to={`/exo/${exo.id}`}>
              <ExoCard exo={exo}/>
            </Link>
          </div>
        ))}
      </HorizontalScroll>
    </div>
  )
}

export default SimilarExercise