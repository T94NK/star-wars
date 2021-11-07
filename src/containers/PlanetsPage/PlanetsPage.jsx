import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { withErrorApi } from "../../HOC's/withErrorApi"
import PlanetsList from '../../components/PlanetsPage/PlanetsList'
import PlanetsNavigation from '../../components/PlanetsPage/PlanetsNavigation'
import { getApiResource, changeHTTP } from '../../utils/network'
import { API_PLANETS } from '../../constants/api'
import {
  getPlanetId,
  getPlanetImage,
  getPlanetPageId,
} from '../../services/getPlanetsData'
import { useQueryParams } from '../../hooks/useQueryParams'

const PlanetsPage = ({ setErrorApi }) => {
  const [planets, setPlanets] = useState([])
  const [prev, setPrev] = useState('')
  const [next, setNext] = useState('')
  const [counterPage, setCounterPage] = useState(1)

  const query = useQueryParams()
  const queryPage = query.get('page')
  const getResource = async (url1) => {
    const res = await getApiResource(url1)

    if (res) {
      const planetsList = res.results.map(({ name, url }) => {
        const id = getPlanetId(url)
        const img = getPlanetImage(id)

        return {
          id,
          name,
          img,
        }
      })
      setPlanets(planetsList)
      setPrev(changeHTTP(res.previous))
      setNext(changeHTTP(res.next))
      setCounterPage(getPlanetPageId(url1))
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }

  useEffect(() => {
    getResource(API_PLANETS + queryPage)
  }, [])

  return (
    <>
      <PlanetsNavigation
        getResource={getResource}
        prev={prev}
        next={next}
        counterPage={counterPage}
      />
      {planets && <PlanetsList planets={planets} />}
    </>
  )
}
PlanetsPage.propTypes = {
  setErrorApi: PropTypes.func.isRequired,
}

export default withErrorApi(PlanetsPage)
