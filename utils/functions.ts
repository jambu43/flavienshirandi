import axios from "axios"
import {api} from "./api"

/**
 * function for request get
 * first req params : url eg: api/xxxxx
 */
export const _getDataFunction = async (url: string) => {
    const headers = {
        "auth-app": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiI3OWRhNDJiNi1mYmRmLTRhYWUtOWNhNi01MmZlOGZhOTgxYzUiLCJpYXQiOjE2MzI4Njk4NTl9.4J34JdeG8Htiec3loWxWhs-jTT3PXHVK5rGzWzyvyIw"
    }
    const {data}:any = await axios.get(`${api}${url}`, {headers})
    return data;
}

/**
 * function for post data
 * first req params : url eg: api/xxxxx
 * second your json objet eg: {name, age, phone}
 */
export const _postDataFunction = async (url: string, objet: {}) => {
    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
    const {data} = await axios.post(`${api}${url}`, objet, {headers})
    return data;
}