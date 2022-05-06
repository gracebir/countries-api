import React from 'react'
import axios from 'axios';
import styled from 'styled-components'
import Dropdown from './Dropdown'
import Card from './Card';

const continentItem = [
  {
    itemLabel: 'Africa'
  },
  {
    itemLabel: 'America'
  },
  {
    itemLabel: 'Asia'
    },
    {
    itemLabel: 'Europe'
    },
     {
    itemLabel: 'Oceania'
  }
]

const Container = styled.div`
    padding: 1.5em 1em;
    @media (min-width: 45em) {
        padding: 2em 3rem;
    }
`

const SearchSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
   @media (min-width: 45em) {
    display: flex;
    justify-content: space-between;
   }

`

const SearchInput = styled.input`
    padding: 1em 1em;
    background-color: var(--color-dark-blue);
    border: none;
    color: var(--color-white-dark-mode);
    border-radius: 5px;
    font-family: 'Nunito Sans', sans-serif;
    &:focus-visible{
        outline: none;
    }
    @media (min-width: 45em) {
        background-color: var(--color-dark-blue);
        border: none;
        color: var(--color-white-dark-mode);
        padding: .3em 1em;
        box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.75);
        border-radius: 5px;
        font-family: 'Nunito Sans', sans-serif;
        &:focus-visible ~&{
            border: none;
        }
    }
  
`

const CountrieSection = styled.div`
    display: grid;
    padding: 2rem 2em;
    grid-template-columns: 1fr;
    gap: 3rem;
    @media (min-width: 35em) {
        padding: 2rem 0;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-row-gap: 1rem;
        gap: 3rem;
    }
    @media (min-width: 40em) {
        padding: 2rem 0;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-row-gap: 1rem;
        gap: 3rem;
    }
    @media (min-width: 45em) {
        padding: 2rem 0;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-row-gap: 1rem;
        gap: 3rem;
    }
    
`



const Home = () => {
    const [countries, setCountries] = React.useState([]);
    const [countryName, setCountryName] = React.useState()
  
    React.useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => {
                if(!res.data){
                    return <div style={{padding:'2em 3rem'}}> <h3>Loading....</h3></div>
                } else {
                    setCountries(res.data);
                }
                
        })
    }, [])

    React.useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then(res => {
            setCountries(res.data);
        })
    },[countryName])
  return (
      <Container>
          <form>
            <SearchSection>
                <SearchInput
                    onChange={(e)=> setCountryName(e.target.value)}
                    value={countryName}
                    placeholder='Search for country'
                    type='search' />
            <Dropdown 
            items={continentItem}
            />
              </SearchSection>
              <CountrieSection>
                  {countries?.map((country, i) => (
                      <Card
                          img={country.flags.png}
                          population={country.population}
                          region={country.region}
                          name={country.name.common}
                          capital={country.capital}
                      />
                  ))}
              </CountrieSection>
          </form>
         
         
    </Container>
  )
}

export default Home