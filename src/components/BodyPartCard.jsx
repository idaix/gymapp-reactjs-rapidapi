import React from 'react'
// import { AiTwotoneFire } from 'react-icons/ai'

import Image from '../assets/react.svg'
const BodyPartCard = ({ item, setExoSelected }) => {
  return (
    <div 
      className='cursor-pointer hover:bg-primary hover:text-black p-5 border border-black hover:border-white duration-300' 
      style={{minWidth: 220}}
      onClick={()=>{
        setExoSelected(item)
        window.scrollTo({ top: 900, left:100, behavior:'smooth', })
      }}
    >
      <figure className='overflow-hidden w-10 h-10'>
        <img src={Image} className='w-full h-full object-contain' alt={item} />
      </figure>
      <h3 className='font-semibold mt-3 capitalize'>{item}</h3>
    </div>
  )
}

export default BodyPartCard