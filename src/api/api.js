import axios from "axios";

export const api = axios.create({
    baseURL :"https://api.openweathermap.org/data/2.5"
})

export const api_key="a4803e22fd35b159c26918356c9294f1"