import React, { useEffect, useState } from 'react'
import Card from '../components/Card/Card';
import DropDown from '../components/DropDow';
import TextInput from '../components/TextInput';
import { countryResponse, getAllContries } from '../queries/queries';

function Countries() {
    const [text, setText] = useState("Filter by Region");
    const [countries, setCounries] = useState<Array<countryResponse>>([]);
    useEffect(()=>{
      const getcountries = async() => {
        setCounries(await getAllContries())
      }
      getcountries()
    },[])
  return (
    <div className='flex flex-col gap-10'>
        {/* search section */}
      <div className='flex flex-col gap-12 md:justify-between md:flex-row md:items-center'>
        <TextInput/>
        <DropDown text={text} setText={setText}/>
      </div>
      {/* countries section */}
      <div className='grid grid-flow-row-dense gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 tablet:gap-8 md:gap-10 md:mx-0'>
        {countries.map((country, i)=> (
          <Card 
          key={i}
          name={country.name.common}
          population={country.population}
          continent={country.region} 
          capital={country.capital}
          imgUrl={country.flags.png}/>
        ))}
      </div>
    </div>
  )
}

export default Countries