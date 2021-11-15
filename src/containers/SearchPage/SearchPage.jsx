import PropTypes from 'prop-types'
import { useState, useEffect, useCallback } from 'react'
import { debounce } from 'lodash'

import { withErrorApi } from "../../HOC's/withErrorApi"
import { getApiResource } from '../../utils/network'
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData'
import { getPlanetId, getPlanetImage } from '../../services/getPlanetsData'
import { API_SEARCH_PERSON, API_SEARCH_PLANET } from '../../constants/api'

import SearchPageInfo from '../../components/SearchPage/SearchPageInfo'

// import styles from './SearchPage.module.css'

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState('')
  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])

  const getResponse = async (param) => {
    const res1 = await getApiResource(API_SEARCH_PERSON + param)
    const res2 = await getApiResource(API_SEARCH_PLANET + param)

    if (res1 || res2) {
      const peopleList = res1.results.map(({ personName, url }) => {
        const personId = getPeopleId(url)
        const personImg = getPeopleImage(personId)
        return {
          personId,
          personImg,
          personName,
        }
      })
      setPeople(peopleList)

      const planetsList = res2.results.map(({ planetName, url }) => {
        const planetId = getPlanetId(url)
        const planetImg = getPlanetImage(planetId)
        return {
          planetId,
          planetImg,
          planetName,
        }
      })
      setPlanets(planetsList)

      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }
  useEffect(() => {
    getResponse('')
  }, [])

  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    []
  )

  const handleInputChange = (e) => {
    const { value } = e.target

    setInputSearchValue(value)
    debouncedGetResponse(value)
  }
  return (
    <>
      <h1 className='header__text'>Search</h1>
      <input
        type='text'
        value={inputSearchValue}
        onChange={handleInputChange}
        placeholder='Input Character or Planet'
      />
      <SearchPageInfo people={people} planets={planets} />
    </>
  )
}

SearchPage.propTypes = {
  setErrorApi: PropTypes.func.isRequired,
}

export default withErrorApi(SearchPage)
