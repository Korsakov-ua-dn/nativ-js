import axios from 'axios';


const key = '?apikey=7ba7277b';
const configOMB = {
    // withCredentials: true,
    baseURL: `http://www.omdbapi.com`,
    // headers: {
    //     'API-KEY': '7ba7277b'
    // },
};

const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`${key}&s=${title}`)
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
