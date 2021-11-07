import {
  ADD_PERSON_TO_FAVORITE,
  REMOVE_PERSON_FROM_FAVORITE,
} from '../constants/actionTypes'
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage'

const favoriteReducerLocalStorageKey = 'favoriteReducer'

const initialState = getLocalStorage(favoriteReducerLocalStorageKey) || {
  myFavorites: [],
}

const favoritePersonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVORITE: {
      const nextState = {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      }
      setLocalStorage(favoriteReducerLocalStorageKey, nextState)
      return nextState
    }

    case REMOVE_PERSON_FROM_FAVORITE: {
      const removeState = {
        ...state,
        myFavorites: state.myFavorites.filter(
          (i) => i.personId !== action.payload
        ),
      }

      setLocalStorage(favoriteReducerLocalStorageKey, removeState)
      return removeState
    }

    default:
      return state
  }
}

export default favoritePersonReducer
