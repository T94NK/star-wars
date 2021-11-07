import {
  HTTP,
  HTTPS,
  SWAPI_PLANET,
  BASE_URL,
  GUIDE_IMG_EXTENSION,
  URL_IMG_PLANET,
  SWAPI_PARAM_PAGE,
} from '../constants/api'

export const getPlanetPageId = (url) => {
  const pos = url.lastIndexOf(SWAPI_PARAM_PAGE)
  const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length)

  return Number(id)
}

const checkProtocol = (url) => {
  if (url.indexOf(HTTPS) !== -1) {
    return HTTPS
  }
  return HTTP
}

const getId = (url, category) => {
  const protocol = checkProtocol(url)

  const id = url.replace(protocol + BASE_URL + category, '').replace(/\//g, '')

  return id
}

export const getPlanetId = (url) => getId(url, SWAPI_PLANET)

export const getPlanetImage = (id) =>
  `${URL_IMG_PLANET}/${id + GUIDE_IMG_EXTENSION}`
