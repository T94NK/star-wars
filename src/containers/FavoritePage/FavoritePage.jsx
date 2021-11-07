import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import PeopleList from '../../components/PeoplePage/PeopleList'
import PlanetsList from '../../components/PlanetsPage/PlanetsList'

import styles from './FavoritePage.module.css'

const FavoritePage = () => {
  const [people, setPeople] = useState([])
  const [planets, setPlanet] = useState([])

  const storeData = useSelector((state) => state.favoriteReducer.myFavorites)
  const storeDataPlanet = useSelector(
    (state) => state.favoritePlanetReducer.myFavoritesPlanet
  )

  useEffect(() => {
    if (storeData.length) {
      const res = storeData.map((item) => ({
        ...item,
        id: item.personId,
      }))

      setPeople(res)
    }
  }, [])

  useEffect(() => {
    if (storeDataPlanet.length) {
      const res = storeDataPlanet.map((item) => ({
        ...item,
        id: item.planetId,
      }))

      setPlanet(res)
    }
  }, [])

  return (
    <>
      <h1 className='header__text'>FavoritesPage</h1>
      {people.length ? (
        <PeopleList people={people.map((i) => ({ ...i, id: i.personId }))} />
      ) : (
        <h2 className={styles.comment}>Choose your favorite character</h2>
      )}
      {planets.length ? (
        <PlanetsList planets={planets.map((i) => ({ ...i, id: i.planetId }))} />
      ) : (
        <h2 className={styles.comment}>Choose your favorite planet</h2>
      )}
    </>
  )
}

export default FavoritePage
