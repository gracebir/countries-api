import React ,{ createContext, useState } from 'react'
import { cardProps } from '../type'

type movieProviderProp = {
    children: React.ReactNode
}

const country: cardProps[] = []

const ContrieContext = createContext(country)
    const [countries, setCountries] = useState<Array<cardProps>>([])

export const CountryProvider = ({children}: movieProviderProp) => {
    <ContrieContext.Provider value={
        countries
    }>
        {children}
    </ContrieContext.Provider>
}