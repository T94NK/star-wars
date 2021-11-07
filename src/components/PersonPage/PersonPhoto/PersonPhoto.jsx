/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import {
  setPersonToFavorite,
  removePersonFromFavorite,
} from '../../../store/actions'

import iconFavorite from './img/fav.png'
import iconFavoriteFill from './img/fav2.png'

import styles from './PersonPhoto.module.css'

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFav,
  setPersonFav,
}) => {
  const dispatch = useDispatch()

  const dispatchFavoritePeople = () => {
    if (personFav) {
      dispatch(removePersonFromFavorite(personId))
      setPersonFav(false)
    } else {
      dispatch(
        setPersonToFavorite({
          name: personName,
          img: personPhoto,
          personId,
        })
      )
    }
  }

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
        <img
          src={personFav ? iconFavoriteFill : iconFavorite}
          onClick={dispatchFavoritePeople}
          onKeyDown={() => {}}
          className={styles.favorite}
          alt='Add to favorite'
        />
      </div>
    </>
  )
}

PersonPhoto.propTypes = {
  personId: PropTypes.string.isRequired,
  personPhoto: PropTypes.string.isRequired,
  personName: PropTypes.string.isRequired,
  personFav: PropTypes.bool.isRequired,
}

export default PersonPhoto
