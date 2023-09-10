'use client'
import {BiSearchAlt2} from 'react-icons/bi'
import { textInputType } from '../../../type'

const TextField = ({search, setSearch}:textInputType) => {
  return (
    <form className='w-full flex gap-3 items-center rounded-md shadow-xl px-6 py-4 bg-bgLight dark:bg-bgDarlElt md:w-[25vw]'>
        <BiSearchAlt2 size={"1.6rem"}/>
      <input value={search} onChange={(e)=> setSearch(e.target.value)} className='w-full outline-none bg-bgLight dark:bg-bgDarlElt text-[1.2rem]' placeholder='Search for a country' type="text" />
    </form>
  )
}

export default TextField
