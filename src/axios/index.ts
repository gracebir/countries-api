import axios from "axios";

export const baseURI = axios.create({
    baseURL: "https://restcountries.com/v3.1"
})