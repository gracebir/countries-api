import React from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { BiArrowBack} from 'react-icons/bi'
import axios from 'axios'

const DetailContainer = styled.div`
    padding: 4em 2em;
    @media (min-width: 45em) {
        padding: 4em 3em;
    }
`

const Country = styled.div`
    padding: 4rem 0;
    @media (min-width: 45em) {
        display: flex;
        flex-direction: row;
        gap: 5rem;
        padding: 4rem 0;
    }
`

const CountryImg = styled.img`
    width: 100%;
    height: 100%;
`

const ImgSection = styled.div`
    @media (min-width: 45em) {
        min-width: 30rem;
    }
`

const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    padding: 2rem 0;
    @media (min-width: 45em) {
        display: flex;
        flex-direction: column;
        gap: 2em;
        padding: 2rem;
    }
    
`

const CountryName = styled.h3`
    font-size: 1.5em;
`

const ParaSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media (min-width: 45em) {
        display: flex;
        gap: 3rem;
    }
`


const Span = styled.span`
    font-weight: 600;
    font-size: 18px;
    white-space: nowrap;
`

const BorderCountries = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: .5em;
    @media (min-width: 45em) {
        display: grid;
        grid-template-columns: repeat(4,1fr);
        gap: .5em;
    }
`

const BorderCountry = styled.div`
    box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.75);
    padding: .3em 3em;
    border-radius: 5px;
    font-size: 12px;
`

const Footerdetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    @media (min-width: 45em) {
        display: flex;
        gap: .5em;
    }
   
`

const ButtonBack = styled(Link)`
    text-decoration: none;
    color: var(--color-white-dark-mode);
    display: flex;
    align-items: center;
    gap: .4rem;
    font-size: 14px;
    background-color: var(--color-dark-blue);
    padding: .5rem 1rem;
    border-radius: 5px;
    max-width: 6rem;
    box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.75);
    &:hover{
        background-color: var(--color-very-dark-blue-dark);
    }
`

const DetailCountry = () => {
    let params = useParams();
    const [country, setCountry] = React.useState([]);

    React.useEffect(()=>{
        // eslint-disable-next-line
        axios.get(`https://restcountries.com/v3.1/name/${params.name}`)
        .then((res)=> setCountry(res.data))
    }, [params.name])

    console.log(country);
    
  return (
    <DetailContainer>
        <div>
            <ButtonBack to="/"><BiArrowBack/><p>Back</p></ButtonBack>
        </div>
        { country?.map((data, i)=>(
        <Country key={i}>
             <ImgSection>
                 <CountryImg src={data.flags.png} alt=''/>
             </ImgSection>
             <InfoSection>
                 <CountryName>{data.name.common}</CountryName>
                 <ParaSection>
                     <div>
                         <p><Span>Native Name</Span>: {Object.values(data.name.nativeName).map(item => `${item.common}`)}</p>
                         <p><Span>Population</Span>: {data.population.toLocaleString("en-Us")}</p>
                         <p><Span>Region</Span>: {data.region}</p>
                         <p><Span>Sub Region</Span>: {data.subregion}</p>
                         <p><Span>Capital</Span>: {data.capital}</p>
                     </div>
                     <div>
                        <p><Span>Top level Domain</Span>: {data.tld}</p>
                        <p><Span>Currencies</Span>: {Object.values(data.currencies).map(item => `${item.name}`)}</p>
                        <p><Span>Languages</Span> : {Object.values(data.languages).map(item => `${item} `)}</p>
                     </div>
                 </ParaSection>
                 <Footerdetail>
                    <Span>Border Coutries: </Span>
                    <BorderCountries>
                    {data.borders?.map((item,i)=>(  
                        <BorderCountry key={i}>{item}</BorderCountry>  
                    ))}
                     </BorderCountries>
                    
                 </Footerdetail>
             </InfoSection>
         </Country>
        ))}
       
    </DetailContainer>
  )
}

export default DetailCountry