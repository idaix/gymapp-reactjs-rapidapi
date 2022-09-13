import { useEffect } from 'react'
import { fetchExercisesData } from '../utils/fetchData'
import { Loader, ExoCard } from './'

const Exercises = ({ setExercises, exercises, exoSelected }) => {
  
  useEffect(() => {
    fetchExercisesData(`exercises`)
    .then( data => setExercises(data))
  }, [exoSelected])

  if(!exercises.length) return <Loader />
  return (
    <div className='bg-slate-500 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {exercises.map((exo, i)=>(
        <ExoCard key={i} exo={exo} />
      ))}
    </div>
  )
}

export default Exercises