import { combineReducers } from 'redux'
import favoriteReducer from './favoriteReducer'
import favoritePlanetReducer from './favoritePlanetReducer'

export default combineReducers({
  favoriteReducer,
  favoritePlanetReducer,
})
