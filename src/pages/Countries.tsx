import { useEffect, useState } from 'react'
import Card from '../components/Card/Card';
import DropDown from '../components/DropDow';
import TextInput from '../components/TextInput';
import numeral from 'numeral'
import { countryResponse, getAllContries, getCountriesSubregion } from '../queries/queries';

function Countries() {
    const [text, setText] = useState("Filter by Region");
    const [countries, setCounries] = useState<Array<countryResponse>>([]);
    const [search, setSearch] = useState("")
    console.log(">>>>>>+++",search)
    useEffect(()=>{
      const getcountries = async() => {
        setCounries(await getAllContries())
      }
      getcountries()
    },[])

    useEffect(()=> {
      const filterCountries = async()=> {
        setCounries(await getCountriesSubregion(text))
      }
      filterCountries()
    }, [text])

    useEffect(()=> {
      const filterCountries = async()=> {
        setCounries(await getCountriesSubregion(text))
      }
      filterCountries()
    }, [text])
  return (
    <div className='flex flex-col gap-10'>
        {/* search section */}
      <div className='flex flex-col gap-12 md:justify-between md:flex-row md:items-center'>
        <TextInput search={search} setSearch={setSearch}/>
        <DropDown text={text} setText={setText}/>
      </div>
      {/* countries section */}
      <div className='grid grid-flow-row-dense gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 tablet:gap-8 md:gap-10 md:mx-0'>
        {countries.map((country, i)=> (
          <Card 
          key={i}
          name={country.name.common}
          population={numeral(country.population).format('0,000')}
          continent={country.region} 
          capital={country.capital}
          imgUrl={country.flags.png}/>
        ))}
      </div>
    </div>
  )
}

export default Countries