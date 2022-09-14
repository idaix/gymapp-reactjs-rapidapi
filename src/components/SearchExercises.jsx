import { useEffect, useState, useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import { fetchExercisesData } from '../utils/fetchData'

import { BodyPartCard } from './';

import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <button className="p-2 text-2xl text-gray-400 hover:text-primary duration-300" onClick={() => scrollPrev()}><AiFillLeftCircle /></button>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <button className="p-2 text-2xl text-gray-400 hover:text-primary duration-300" onClick={() => scrollNext()}><AiFillRightCircle /></button>
  );
};


const SearchExercises = ({ setExoSelected }) => {

  const [ bodyPartsList, setBodyPartsList ] = useState([])

  useEffect(() => {
    fetchExercisesData(`exercises/bodyPartList`)
    .then( data=>setBodyPartsList([ 'all', ...data ]))
  }, [])

  return (
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {bodyPartsList.map(item=>(
            <BodyPartCard setExoSelected={setExoSelected} item={item} key={item} />
        ))}
      </ScrollMenu>
  )
}

export default SearchExercises