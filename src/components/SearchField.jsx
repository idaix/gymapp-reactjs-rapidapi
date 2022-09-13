import { useEffect, useState } from 'react'
import Button from './Button/Button'
import {Input} from './'
import {fetchExercisesData} from '../utils/fetchData'

const SearchField = ({ setExercises}) => {
  const [ value, setValue ] = useState('')
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (value) {
      const exercisesData = await fetchExercisesData(`exercises`)
      .then( data=>(data))

      const searchedExo = exercisesData.filter(
        (exo) => exo.name.toLowerCase().includes(value)
              || exo.bodyPart.toLowerCase().includes(value)
              || exo.equipment.toLowerCase().includes(value)
              || exo.target.toLowerCase().includes(value)
      )
      setValue('')
      setExercises(searchedExo)
    }

  }
    return (
      <form 
          onSubmit={handleSubmit}
          className='flex items-center'
      >
          <Input type='text' placeholder='Search...' value={value} setValue={setValue} />
          <Button primary>
              Search
          </Button>
      </form>
  )
}

export default SearchField