import React, { useEffect, useState } from 'react'

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

const Detail = ({ bodyPart, equipment, gifUrl, name, target }) => {
  
  
    const [imageTarget, setImageTarget] = useState(All)
    useEffect(() => {
      switch (target) {
        case 'neck':
          setImageTarget(Neck)
          break;
        case 'back':
          setImageTarget(Back)
          break;
        case 'cardio':
          setImageTarget(Cardio)
          break;
        case 'chest':
          setImageTarget(Chest)
          break;
        case 'shoulders':
          setImageTarget(Shoulder)
          break;
        case 'waist':
          setImageTarget(Waist)
          break;
        case 'lower legs':
          setImageTarget(LLeg)
          break;
        case 'upper legs':
          setImageTarget(ULeg)
          break;
        case 'upper arms' || 'lower arms':
          setImageTarget(Arm)
          break;
          
        default:
          setImageTarget(All)
          break;
      }
    }, [target])
    
    const [imagebodyPart, setImagebodyPart] = useState(All)
    useEffect(() => {
      switch (bodyPart) {
        case 'neck':
          setImagebodyPart(Neck)
          break;
        case 'back':
          setImagebodyPart(Back)
          break;
        case 'cardio':
          setImagebodyPart(Cardio)
          break;
        case 'chest':
          setImagebodyPart(Chest)
          break;
        case 'shoulders':
          setImagebodyPart(Shoulder)
          break;
        case 'waist':
          setImagebodyPart(Waist)
          break;
        case 'lower legs':
          setImagebodyPart(LLeg)
          break;
        case 'upper legs':
          setImagebodyPart(ULeg)
          break;
        case 'upper arms' || 'lower arms':
          setImagebodyPart(Arm)
          break;
          
        default:
          setImagebodyPart(All)
          break;
      }
    }, [bodyPart])
  
    return (
    <div className='md:flex md:items-start md:flex-row-reverse md:gap-20'>
        
        <div className="flex-1 mb-5">
            <h1 className="text-3xl mb-2 capitalize">{name}</h1>
            <p className='text-sm text-gray-400 mb-2'>
                Exercises keep you strong. {name} is one of the best
                exercises to target your {target}. It will help you improve your
                mood and gain energy.
            </p>
            <ul className="capitalize">
                <li className='flex items-center gap-2 mb-2'>
                    <img className='w-16 h-16 p-2 rounded-full' style={{ backgroundColor: '#222' }} src={imagebodyPart} alt={bodyPart} />
                    <span>{bodyPart}</span>
                </li>
                <li className='flex items-center gap-2'>
                    <img className='w-16 h-16 p-2 rounded-full' style={{ backgroundColor: '#222' }} src={imageTarget} alt={target} />
                    {target}
                </li>
            </ul>
        </div>
        <figure className='flex-1'>
            <img className='w-full object-cover' src={gifUrl} alt={name} />
        </figure>
    </div>
  )
}

export default Detail