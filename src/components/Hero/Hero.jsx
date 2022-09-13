import { Link } from 'react-router-dom'
import { Button } from '../'
import  manImage  from '../../assets/hero-man.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className='w-full text-center md:text-start'>
      <div className="container mx-auto pt-10 px-3 flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="flex-1">
            <h2 className='text-strok font-bold text-5xl uppercase'>Make Your</h2>
            <h1 className='font-bold text-6xl uppercase my-5'>BODY SHAPE</h1>
            <p className='text-gray-400 mb-11'>
              Check out the most effective exercises personalized to you
            </p>
            <Button primary>
              <Link to='/#exercises'>Get Started</Link>
            </Button>
          </div>
          <div className="overflow-hidden mb-5 -z-10 flex-1">
            <img className='object-cover mx-auto w-56' src={manImage} alt="image" />
          </div>
      </div>
    </div>
  )
}

export default Hero