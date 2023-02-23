import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft} from 'react-icons/hi'
import { detailResponse, getCountryDetail } from '../queries/queries'

function Country() {
    const [country, setCountry] = useState<Array<detailResponse>>([])
    useEffect(()=>{
        const fetchData = async () => {
            setCountry(await getCountryDetail("Belgium"))
        }
        fetchData()
    },[])
    console.log(country[0])
  return (
    <div className='flex flex-col gap-16 md:flex-col px-4 md:px-0 md:h-[72.6vh] lg:h-[73.3vh]'>
        <Link className='shadow-xl px-8 py-2 flex flex-row items-center gap-2 rounded-md bg-bgLight dark:bg-bgDarlElt w-fit' to='/'>
            <HiOutlineArrowNarrowLeft/>
            <span>Back</span>
        </Link>
        <div className='flex flex-col gap-10 md:flex-row md:gap-16'>
            <div className='w-full md:w-1/2 h-[35vh] md:h-[56vh]'>
                <img className='w-full h-full' src={country[0].flags.png} alt="" />
            </div>
            <div className='flex flex-col flex-1 gap-8 md:gap-10 md:py-10'>
                <h1 className='text-2xl font-bold md:text-3xl'>{country[0]?.name.common}</h1>
                <div className='flex flex-col gap-6 md:flex-row md:justify-between'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2 items-center'>
                            <span className='font-semibold text-xl'>Native Name:</span>
                            <p>{country[0]?.name.nativeName.nld.common}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='font-semibold text-xl'>Population:</span>
                            <p>{country[0]?.population}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='font-semibold text-xl'>Region:</span>
                            <p>{country[0]?.region}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='font-semibold text-xl'>Sub Region:</span>
                            <p>{country[0]?.subregion}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='font-semibold text-xl'>Capital:</span>
                            <p>{country[0]?.capital}</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-2 items-center'>
                            <span className='font-semibold text-xl'>Top Level:</span>
                            <p>{country[0]?.tld}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='font-semibold text-xl'>Currencies:</span>
                            <p>{country[0]?.currencies[Object.keys(country[0].currencies)[0]].name}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='font-semibold text-xl'>Languages:</span>
                            <p>
                                {Object.values(country[0]?.languages).map((item=> (
                                    <>{item}{", "}</>
                                )))}
                            </p>
                        </div>
                    </div>
                </div>
                {country[0]?.borders.length ? (
                     <div className='flex gap-3 md:items-center flex-col md:flex-row'>
                     <span className='font-semibold text-xl'>Border Countries:</span>
                     <div className='grid grid-cols-3 gap-4 md:grid-cols-4'>
                         {country[0].borders.map((border, key)=>(
                              <div key={key} className='shadow-xl px-4 py-2 rounded-md'>
                              {border}
                          </div>
                         ))}
                 
                     </div>
                 </div>
                ): null}
            </div>
        </div>
    </div>
  )
}

export default Country
