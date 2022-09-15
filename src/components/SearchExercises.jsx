import { useEffect, useState } from 'react'

import { fetchExercisesData } from '../utils/fetchData'

import { BodyPartCard } from './';

import { HorizontalScroll } from '../components';




const SearchExercises = ({ setExoSelected }) => {

  const [ bodyPartsList, setBodyPartsList ] = useState([])

  useEffect(() => {
    fetchExercisesData(`exercises/bodyPartList`)
    .then( data=>setBodyPartsList([ 'all', ...data ]))
  }, [])

  return (
      <HorizontalScroll>
        {bodyPartsList.map(item=>(
            <BodyPartCard setExoSelected={setExoSelected} item={item} key={item} />
        ))}
      </HorizontalScroll>
  )
}

export default SearchExercises