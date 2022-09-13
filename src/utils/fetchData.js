import axios from "axios"


const EXO_BASE_URL = 'https://exercisedb.p.rapidapi.com'
const YTB_BASE_URL = 'https://exercisedb.p.rapidapi.com'


const exerciseOptions = {
    url: EXO_BASE_URL,
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_APP_EXO_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': import.meta.env.VITE_APP_YTB_API_KEY,
    },
};

export const fetchExercisesData = async (url) => {
    const { data } = await axios.get(`${EXO_BASE_URL}/${url}`, exerciseOptions)
    return data
}

export const fetchYoutubeData = async (url) => {
    const { data } = await axios.get(`${YTB_BASE_URL}/${url}`, youtubeOptions)
    return data
}