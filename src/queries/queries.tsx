import axios from "axios"

type nameObject = {
    common: string
    official: string
}
type flagObject = {
    png: string
    svg: string
}

export type countryResponse = {
    name: nameObject
    population: number
    region: string
    flags: flagObject
    capital: string
}

export type detailResponse = {
    name: {
        common: string,
        nativeName: {
            nld: {
                common: string
            }
        }
    }
    population: string
    region: string
    capital: string
    languages: any
    tld: string
    currencies: any
    subregion: string
    borders: Array<string>
    flags: {
        png: string,
        svg: string
    }
}

export const getAllContries = async () => {
    const response = await axios('https://restcountries.com/v3.1/all');
    const data: Array<countryResponse> = await response.data
    return data
}


export const getCountryDetail = async(name: string) => {
    const response = await axios(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
    const data : Array<detailResponse> = await response.data;
    return data
}