import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'

function TextInput() {
  return (
    <div className='w-full flex gap-3 items-center rounded-md shadow-xl px-6 py-4 bg-bgLight dark:bg-bgDarlElt md:w-[25vw]'>
        <BiSearchAlt2 size={"1.6rem"}/>
      <input className='w-full outline-none bg-bgLight dark:bg-bgDarlElt text-[1.2rem]' placeholder='Search for a country' type="text" />
    </div>
  )
}

export default TextInput
