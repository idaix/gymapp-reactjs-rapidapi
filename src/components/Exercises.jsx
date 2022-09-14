import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchExercisesData } from '../utils/fetchData'
import { Loader, ExoCard } from './'

import ReactPaginate from 'react-paginate'



const Exercises = ({ setExercises, exercises, exoSelected }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(exercises.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(exercises.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, exoSelected, exercises]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % exercises.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (exoSelected === 'all'){
      fetchExercisesData(`exercises`).then( data => setExercises(data))
    }else{
      fetchExercisesData(`exercises/bodyPart/${exoSelected}`).then( data => setExercises(data))
    }
  }, [exoSelected])

  if(!exercises.length) return <div className='text-center pt-5'><Loader /></div>
  return (
    <>
      <h1 className="text-xl text-gray-400 font-titleFont capitalize my-3">{exoSelected} exercices</h1>
      <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {currentItems.map((exo, i)=>(
          <Link to={`/exo/${exo.id}`} key={i}>
            <ExoCard exo={exo} />
          </Link>
        ))}
      </div>
      <div className="">
        <ReactPaginate
          className='flex items-center gap-3 justify-center mx-auto'
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  )
}

export default Exercises