// common
export const HTTPS = 'https://'
export const HTTP = 'http://'
// star wars api
export const BASE_URL = 'swapi.dev/api/'
export const SWAPI_PEOPLE = 'people'
export const SWAPI_PLANET = 'planets'

export const SWAPI_PARAM_PAGE = '/?page='

export const API_PEOPLE = HTTPS + BASE_URL + SWAPI_PEOPLE + SWAPI_PARAM_PAGE
export const API_PLANETS = HTTPS + BASE_URL + SWAPI_PLANET + SWAPI_PARAM_PAGE

export const API_PERSON = HTTPS + BASE_URL + SWAPI_PEOPLE
export const API_PLANET = HTTPS + BASE_URL + SWAPI_PLANET

// visual guide
export const GUIDE_BASE_IMG = 'https://starwars-visualguide.com/assets/img/'
export const GUIDE_PEOPLE = 'characters'
export const GUIDE_IMG_EXTENSION = '.jpg'

export const URL_IMG_PERSON = GUIDE_BASE_IMG + GUIDE_PEOPLE
export const URL_IMG_PLANET = GUIDE_BASE_IMG + SWAPI_PLANET
