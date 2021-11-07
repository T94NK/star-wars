import {
  ADD_PLANET_TO_FAVORITE,
  REMOVE_PLANET_FROM_FAVORITE,
} from '../constants/actionTypes'
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage'

const favoriteReducerLocalStorageKey = 'favoritePlanetReducer'

const initialState = getLocalStorage(favoriteReducerLocalStorageKey) || {
  myFavoritesPlanet: [],
}

const favoritePlanetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLANET_TO_FAVORITE: {
      const nextState = {
        ...state,
        myFavoritesPlanet: [...state.myFavoritesPlanet, action.payload],
      }
      setLocalStorage(favoriteReducerLocalStorageKey, nextState)
      return nextState
    }

    case REMOVE_PLANET_FROM_FAVORITE: {
      const removeState = {
        ...state,
        myFavoritesPlanet: state.myFavoritesPlanet.filter(
          (i) => i.planetId !== action.payload
        ),
      }

      setLocalStorage(favoriteReducerLocalStorageKey, removeState)
      return removeState
    }

    default:
      return state
  }
}

export default favoritePlanetReducer
