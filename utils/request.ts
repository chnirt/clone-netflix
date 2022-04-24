import { NEXT_PUBLIC_TMDB_API_KEY } from '../environments'

const TMDB_API_KEY = NEXT_PUBLIC_TMDB_API_KEY
const BASE_API = 'https://api.themoviedb.org/3'
const API_KEY = `api_key=${TMDB_API_KEY}`
const LANGUAGE = `language=en-US`

export const netflixUrl = `${BASE_API}/discover/tv?${API_KEY}&with_networks=213`

export const latestUrl = `${BASE_API}/movie/latest?${API_KEY}&${LANGUAGE}`
export const nowPlayingUrl = `${BASE_API}/movie/now_playing?${API_KEY}&${LANGUAGE}`
export const popularUrl = `${BASE_API}/movie/popular?${API_KEY}&${LANGUAGE}`
export const trendingUrl = `${BASE_API}/trending/all/week?${API_KEY}&${LANGUAGE}`
export const upcomingUrl = `${BASE_API}/movie/upcoming?${API_KEY}&${LANGUAGE}`
export const topRatedUrl = `${BASE_API}/movie/top_rated?${API_KEY}&${LANGUAGE}`

export const actionUrl = `${BASE_API}/discover/movie?${API_KEY}&with_genres=28`
export const adventureUrl = `${BASE_API}/discover/movie?${API_KEY}&with_genres=12`
export const animationUrl = `${BASE_API}/discover/movie?${API_KEY}&with_genres=16`
export const crimeUrl = `${BASE_API}/discover/movie?${API_KEY}&with_genres=80`
