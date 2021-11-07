/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import {
  setPlanetToFavorite,
  removePlanetFromFavorite,
} from '../../../store/actions'

import iconFavorite from './img/fav.png'
import iconFavoriteFill from './img/fav2.png'
import holder from './img/holder.jpg'

import styles from './PlanetPhoto.module.css'

const PlanetPhoto = ({
  planetPhoto,
  planetName,
  planetId,
  planetFav,
  setPlanetFav,
}) => {
  const dispatch = useDispatch()

  const dispatchFavoritePlanets = () => {
    if (planetFav) {
      dispatch(removePlanetFromFavorite(planetId))
      setPlanetFav(false)
    } else {
      dispatch(
        setPlanetToFavorite({
          name: planetName,
          img: planetPhoto,
          planetId,
        })
      )
    }
  }

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.photo}
          src={planetPhoto}
          alt={planetName}
          onError={(e) => {
            e.target.src = holder
          }}
        />
        <img
          src={planetFav ? iconFavoriteFill : iconFavorite}
          onClick={dispatchFavoritePlanets}
          onKeyDown={() => {}}
          className={styles.favorite}
          alt='Add to favorite'
        />
      </div>
    </>
  )
}

PlanetPhoto.propTypes = {
  planetId: PropTypes.string.isRequired,
  planetPhoto: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
  planetFav: PropTypes.bool.isRequired,
}

export default PlanetPhoto
