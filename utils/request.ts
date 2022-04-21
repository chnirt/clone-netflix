const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || ''
const BASE_API = 'https://api.themoviedb.org/3'
const API_KEY = `api_key=${TMDB_API_KEY}`
const LANGUAGE = `language=en-US`

export const latestUrl = `${BASE_API}/movie/latest?${API_KEY}&${LANGUAGE}`
export const nowPlayingUrl = `${BASE_API}/movie/now_playing?${API_KEY}&${LANGUAGE}&page=1`
export const popularUrl = `${BASE_API}/movie/popular?${API_KEY}&${LANGUAGE}&page=2`
export const trendingUrl = `${BASE_API}/trending/all/day?${API_KEY}&${LANGUAGE}&page=3`
export const upcomingUrl = `${BASE_API}/movie/upcoming?${API_KEY}&${LANGUAGE}&page=4`
export const topRatedUrl = `${BASE_API}/movie/top_rated?${API_KEY}&${LANGUAGE}&page=5`

export const actionUrl = `${BASE_API}/discover/movie?${API_KEY}&${LANGUAGE}&page=6&with_genres=28`
export const adventureUrl = `${BASE_API}/discover/movie?${API_KEY}&${LANGUAGE}&page=7&with_genres=12`
export const animationUrl = `${BASE_API}/discover/movie?${API_KEY}&${LANGUAGE}&page=7&with_genres=16`
export const crimeUrl = `${BASE_API}/discover/movie?${API_KEY}&${LANGUAGE}&page=7&with_genres=80`
