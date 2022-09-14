
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Detail, ExerciseVideos, Navbar, Section, SimilarExercise } from '../components'
import { fetchExercisesData } from '../utils/fetchData'

const Exo = () => {
  const { id } = useParams()
  const [exoDetail, setExoDetail] = useState([])
  

  useEffect(()=>{
    fetchExercisesData(`exercises/exercise/${id}`).then(data=>setExoDetail(data))
  }, [id])


  console.log(exoDetail);
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="container mx-auto px-3">
        <Section><Detail {...exoDetail} /></Section>
        <Section title='Watch' description={`Watch ${exoDetail.name} exercise videos`}><ExerciseVideos /></Section>
        <Section title='Similar' description={`Similar ${exoDetail.target} exercises`}><SimilarExercise /></Section>
      </div>
      
    </div>
  )
}

export default Exo