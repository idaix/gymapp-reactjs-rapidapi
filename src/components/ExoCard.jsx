import React from 'react'

const ExoCard = ({ exo }) => {
  return (
    <div className='p-3 shadow' style={{ backgroundColor: '#111' }}>
      <img src={exo.gifUrl} alt={exo.name} loading="lazy" className='w-full object-cover' />
      <h1 className="text-bold text-lg my-2 capitalize">{exo.name}</h1>
      <div className="flex items-center gap-2 text-sm font-semibold capitalize">
        <span className="px-2 rounded-full bg-primary text-black ">{exo.bodyPart}</span>
        <span className="px-2 rounded-full bg-white text-black ">{exo.target}</span>
      </div>
      
    </div>
  )
}

export default ExoCard