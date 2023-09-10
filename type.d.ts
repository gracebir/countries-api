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

export type cardProps = {
    id?: number,
    name: string,
    imgUrl: string
    capital: string
    population: string,
    continent: string
}

export type dropDownProps = {
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
}


export type textInputType = {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
}