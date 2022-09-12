import { Link } from 'react-router-dom'
import { Logo, Button } from './'


const Navbar = () => {
  return (
    <nav className='container mx-auto flex items-center gap-10'>
      <Link to='/'><Logo /></Link>
      <ul className="flex items-center gap-3 flex-1 text-gray-300">
        <li className='hover:text-white duration-300'><Link to='/'>Home</Link></li>
        <li className='hover:text-white duration-300'><Link to='/#exercises'>Exercises</Link></li>
      </ul>
      <Button>
        <Link to='/#exercises'>
          Get Started
        </Link>
      </Button>
    </nav>
  )
}

export default Navbar