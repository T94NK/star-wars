import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import PlanetResidents from '../../components/PlanetPage/PlanetResidents'
import PlanetInfo from '../../components/PlanetPage/PlanetInfo'
import PlanetLinkBack from '../../components/PlanetPage/PlanetLinkBack'
import PlanetPhoto from '../../components/PlanetPage/PlanetPhoto'
import { API_PLANET } from '../../constants/api'
import { withErrorApi } from "../../HOC's/withErrorApi"
import { getPlanetImage } from '../../services/getPlanetsData'
import { getApiResource } from '../../utils/network'
import styles from './PlanetPage.module.css'

const PlanetPage = ({ match, setErrorApi }) => {
  const [planet, setPlanet] = useState({})
  const [planetFav, setPlanetFav] = useState(false)

  const storeDate = useSelector(
    (state) => state.favoritePlanetReducer.myFavoritesPlanet
  )

  useEffect(() => {
    const getPlanet = async () => {
      const { id } = match.params
      const res = await getApiResource(`${API_PLANET}/${id}`)

      if (id) {
        const plan = storeDate.find((i) => i.planetId === id)

        // eslint-disable-next-line no-unused-expressions
        plan ? setPlanetFav(true) : setPlanetFav(false)
      }

      if (res) {
        const info = [
          { title: 'Climate', data: res.climate },
          { title: 'Diameter', data: res.diameter },
          { title: 'Population', data: res.population },
          { title: 'Rotation Period', data: res.rotation_period },
          { title: 'Terrain', data: res.terrain },
        ]

        setPlanet({
          info,
          id,
          name: res.name,
          img: getPlanetImage(id),
          residents: res.residents,
        })

        setErrorApi(false)
      } else {
        setErrorApi(true)
      }
    }

    getPlanet()
  }, [storeDate])

  return (
    <>
      <PlanetLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.planet__name}>{planet.name}</span>

        <div className={styles.container}>
          <PlanetPhoto
            planetPhoto={planet.img}
            planetName={planet.name}
            planetId={planet.id}
            planetFav={planetFav}
            setPlanetFav={setPlanetFav}
          />

          {planet.info && <PlanetInfo planetInfo={planet.info} />}
          {planet.residents && (
            <PlanetResidents planetResidents={planet.residents} />
          )}
        </div>
      </div>
    </>
  )
}

PlanetPage.propTypes = {
  setErrorApi: PropTypes.func.isRequired,
  match: PropTypes.func.isRequired,
}

export default withErrorApi(PlanetPage)
