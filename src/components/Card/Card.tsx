import React from 'react'
import { cardProps } from '../../type'
import { Link } from 'react-router-dom'

function Card({name, population, capital, continent,imgUrl}:cardProps) {
  return (
    <Link to={`/country/${name}`} className='bg-bgLight dark:bg-bgDarlElt h-[23rem] w-[18rem] shadow-xl lg:w-full rounded-md sm:w-[19.5rem] md:w-[19rem] md:h-[24rem]'>
      {/* card header */}
      <div className='h-[50%] rounded-t-md'>
        <img className='w-[100%] h-[100%] object-cover rounded-t-md' src={imgUrl} alt="" />
      </div>
      {/* card boby  */}
      <div className='flex flex-col px-8 py-4 gap-4'>
        <h1 className='text-xl font-bold'>{name}</h1>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <span className='font-bold'>Population:</span>
            <p>{population}</p>
          </div>
          <div className='flex gap-2'>
            <span className='font-bold'>Region:</span>
            <p>{continent}</p>
          </div>
          <div className='flex gap-2'>
            <span className='font-bold'>Capital:</span>
            <p>{capital}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
