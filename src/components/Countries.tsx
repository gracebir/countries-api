'use client'
import numeral from "numeral"
import { countryResponse } from "../../type"
import CountryCard from "./CountryCard"

const Countries = ({ countries }: { countries: Array<countryResponse> }) => {
    return (
        <div className='grid grid-flow-row-dense gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 tablet:gap-8 md:gap-10 md:mx-0'>
            {countries.map((country, i) => (
                <CountryCard
                    key={i}
                    name={country.name.common}
                    population={numeral(country.population).format('0,000')}
                    continent={country.region}
                    capital={country.capital}
                    imgUrl={country.flags.png} />
            ))}
        </div>
    )
}

export default Countries
