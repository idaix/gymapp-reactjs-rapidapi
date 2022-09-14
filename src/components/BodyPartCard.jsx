import React, { useEffect, useState } from 'react'
// import { AiTwotoneFire } from 'react-icons/ai'

import Image from '../assets/react.svg'

// import body parts icons
import Abs from '../assets/body-parts/abs.png'
import Neck from '../assets/body-parts/neck.png'
import Back from '../assets/body-parts/back.png'
import Cardio from '../assets/body-parts/cardio.png'
import Chest from '../assets/body-parts/chest.png'
import Shoulder from '../assets/body-parts/shoulder.png'
import Waist from '../assets/body-parts/waist.png'
import All from '../assets/body-parts/all.png'
import LLeg from '../assets/body-parts/lleg.png'
import ULeg from '../assets/body-parts/uleg.png'
import Arm from '../assets/body-parts/arm.png'


const BodyPartCard = ({ item, setExoSelected }) => {
  const [image, setImage] = useState(Image)
  useEffect(() => {
    switch (item) {
      case 'neck':
        setImage(Neck)
        break;
      case 'back':
        setImage(Back)
        break;
      case 'cardio':
        setImage(Cardio)
        break;
      case 'chest':
        setImage(Chest)
        break;
      case 'shoulders':
        setImage(Shoulder)
        break;
      case 'waist':
        setImage(Waist)
        break;
      case 'lower legs':
        setImage(LLeg)
        break;
      case 'upper legs':
        setImage(ULeg)
        break;
      case 'upper arms' || 'lower arms':
        setImage(Arm)
        break;
        
      default:
        setImage(All)
        break;
    }
  }, [item])
  

  return (
    <div 
      className='cursor-pointer text-center  p-5 border border-black hover:border-primary duration-300' 
      style={{minWidth: 220}}
      onClick={()=>{
        setExoSelected(item)
        window.scrollTo({ top: 900, left:100, behavior:'smooth', })
      }}
    >
      <figure className='overflow-hidden w-10 h-10 mx-auto'>
        <img src={image} className='w-full h-full object-contain' alt={item} />
      </figure>
      <h3 className='font-semibold mt-3 capitalize'>{item}</h3>
    </div>
  )
}

export default BodyPartCard