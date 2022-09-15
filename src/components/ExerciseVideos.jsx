import React from 'react'
import { VideoCard, Loader } from './'

const ExerciseVideos = ({ exoVideos }) => {
  if (!exoVideos.length) return <div className='text-center pt-5'><Loader /></div>
  console.log(exoVideos)
  return (
    <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
      {exoVideos?.slice(0, 3).map((video, i)=>(
        <VideoCard video={video} key={i} />
      ))}
    </div>
  )
}

export default ExerciseVideos