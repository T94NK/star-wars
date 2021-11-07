import {
  ADD_PERSON_TO_FAVORITE,
  REMOVE_PERSON_FROM_FAVORITE,
  ADD_PLANET_TO_FAVORITE,
  REMOVE_PLANET_FROM_FAVORITE

} from '../constants/actionTypes'

export const setPersonToFavorite = (person) => ({
  type: ADD_PERSON_TO_FAVORITE,
  payload: person,
})

export const removePersonFromFavorite = (personId) => ({
  type: REMOVE_PERSON_FROM_FAVORITE,
  payload: personId,
})

export const setPlanetToFavorite = (planet) => ({
  type: ADD_PLANET_TO_FAVORITE,
  payload: planet,
})

export const removePlanetFromFavorite = (planetId) => ({
  type: REMOVE_PLANET_FROM_FAVORITE,
  payload: planetId,
})
