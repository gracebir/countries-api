import { baseURI } from "@/axios"
import Countries from "@/components/Countries";
import { countryResponse } from "../../type";

async function getCountries() {
  const response = await baseURI.get('/all');
  const data: Array<countryResponse> = await response.data
  return data
}

export default async function Home() {
  const data = await getCountries()
  return (
    <main>
      <Countries countries={data}/>
    </main>
  )
}
