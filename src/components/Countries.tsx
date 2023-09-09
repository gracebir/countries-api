'use client'
import numeral from "numeral"
import { countryResponse } from "../../type"
import CountryCard from "./CountryCard"
import TextField from "./Elements/TextField"
import DropDown from "./Elements/DropDown"
import { useEffect, useState } from "react"
import { useDebounce } from "../utils/debounceSearch"
import { getCountriesSubregion, searchCountriesName } from "../utils/fetchs"

const Countries = ({ countries }: { countries: Array<countryResponse> }) => {
    const [text, setText] = useState("Filter by Region");
    const [countriesData, setCounriesData] = useState<Array<countryResponse>>(countries);
    const [search, setSearch] = useState<string>("")
    let deb = useDebounce(search)

    useEffect(() => {
        const filterCountries = async () => {
            setCounriesData(await getCountriesSubregion(text))
        }
        filterCountries()
    }, [text])

    useEffect(() => {
        const searchCountries = async () => {
            setCounriesData(await searchCountriesName(deb))
        }
        searchCountries()
    }, [deb])

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-12 md:justify-between md:flex-row md:items-center">
                <TextField search={search} setSearch={setSearch} />
                <DropDown text={text} setText={setText} />
            </div>
            <div className='grid grid-flow-row-dense gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 tablet:gap-8 md:gap-10 md:mx-0'>
                {countriesData.map((country, _) => (
                    <CountryCard
                        key={country.name.common}
                        name={country.name.common}
                        population={numeral(country.population).format('0,000')}
                        continent={country.region}
                        capital={country.capital}
                        imgUrl={country.flags.png} />
                ))}
            </div>
        </div>
    )
}

export default Countries
