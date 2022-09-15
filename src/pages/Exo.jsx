
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Detail, ExerciseVideos, Navbar, Section, SimilarExercise } from '../components'
import { fetchExercisesData, fetchYoutubeData } from '../utils/fetchData'

const Exo = () => {
  const { id } = useParams()
  const [exoDetail, setExoDetail] = useState([])
  const [exoVideos, setExoVideos] = useState([])
  const [targetMuscleData, setTargetMuscleData] = useState([])
  const [equipmentData, setEquipmentData] = useState([])
  

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchData = async () => {
      // fetch exo detail
      const exoDetailData = await fetchExercisesData(`exercises/exercise/${id}`).then(data=>data)
      setExoDetail(exoDetailData)
      // fetch exo videos from youtube
      fetchYoutubeData(`search?query=${exoDetailData.name}`).then(data=>setExoVideos(data.contents))
      // fetch similar exo
      fetchExercisesData(`exercises/target/${exoDetailData.target}`).then(data=>setTargetMuscleData(data))
      fetchExercisesData(`exercises/equipment/${exoDetailData.equipment}`).then(data=>setEquipmentData(data))

    }

    fetchData()
  }, [id])

  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="container mx-auto px-3">
        <Section><Detail {...exoDetail} /></Section>
        <Section title='Watch on youtube' description={`Watch ${exoDetail.name} exercise videos`}><ExerciseVideos exoVideos={exoVideos} /></Section>
        <Section title='Similar' description={`Similar ${exoDetail.target} exercises`}><SimilarExercise data={targetMuscleData} /></Section>
        <Section title='Similar' description={`Similar ${exoDetail.equipment} exercises`}><SimilarExercise data={equipmentData} /></Section>
      </div>
      
    </div>
  )
}

export default Exo