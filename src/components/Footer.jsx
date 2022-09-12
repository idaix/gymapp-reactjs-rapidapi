import React from 'react'
import { Link } from 'react-router-dom'
import {Logo} from './'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center mt-10' style={{height: 100, background: '#111'}}>
      <Link to='/'><Logo /></Link> <span className='text-xs'>By Dai Chekkal</span>
    </footer>
  )
}

export default Footer