import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import icon from './img/book-mark.png'

import styles from './Favorites.module.css'

const Favorites = () => {
  const [countPerson, setCountPerson] = useState()
  const [countPlanet, setCountPlanet] = useState()

  const storeDate = useSelector((state) => state.favoriteReducer.myFavorites)

  const storePlanetDate = useSelector(
    (state) => state.favoritePlanetReducer.myFavoritesPlanet
  )

  useEffect(() => {
    const favLength = storeDate && Object.keys(storeDate).length

    setCountPerson(favLength)
  }, [storeDate])

  useEffect(() => {
    const favLength = storePlanetDate && Object.keys(storePlanetDate).length

    setCountPlanet(favLength)
  }, [storePlanetDate])

  return (
    <div className={styles.container}>
      <Link to='/favorites'>
        <span className={styles.counterPerson}>Char:{countPerson}</span>
        <span className={styles.counterPlanet}>Plan:{countPlanet}</span>
        <img className={styles.icon} src={icon} alt='Favorites' />
      </Link>
    </div>
  )
}

export default Favorites
