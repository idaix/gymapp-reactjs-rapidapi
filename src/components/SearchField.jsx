import React from 'react'
import Button from './Button/Button'
import {Input} from './'

const SearchField = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submited')
  }
    return (
    <form 
        onSubmit={handleSubmit}
        className='flex items-center'
    >
        <Input type='text' placeholder='Search...' />
        <Button primary>
            Search
        </Button>
    </form>
  )
}

export default SearchField