import { baseURI } from "@/axios"
import { countryResponse } from "../../type"

export const getCountriesSubregion = async (name: string) => {
    let url: string;
    url = name === "Filter by Region" ? "/all" : `/subregion/${name}`
    const response = await baseURI.get(url)
    const data: Array<countryResponse> = await response.data
    return data
}

export const searchCountriesName = async (name: string) => {
    let url: string;
    url = name === "" ? "/all" : `/name/${name}`
    const response = await baseURI.get(url)
    const data: Array<countryResponse> = await response.data
    return data
}