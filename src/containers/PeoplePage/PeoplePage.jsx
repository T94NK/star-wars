import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { withErrorApi } from "../../HOC's/withErrorApi"
import PeopleList from '../../components/PeoplePage/PeopleList'
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation'
import { getApiResource, changeHTTP } from '../../utils/network'
import { API_PEOPLE } from '../../constants/api'
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from '../../services/getPeopleData'
import { useQueryParams } from '../../hooks/useQueryParams'

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState([])
  const [prev, setPrev] = useState('')
  const [next, setNext] = useState('')
  const [counterPage, setCounterPage] = useState(1)

  const query = useQueryParams()
  const queryPage = query.get('page')
  const getResource = async (url1) => {
    const res = await getApiResource(url1)

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url)
        const img = getPeopleImage(id)

        return {
          id,
          name,
          img,
        }
      })
      setPeople(peopleList)
      setPrev(changeHTTP(res.previous))
      setNext(changeHTTP(res.next))
      setCounterPage(getPeoplePageId(url1))
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }

  useEffect(() => {
    getResource(API_PEOPLE + queryPage)
  }, [])

  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prev={prev}
        next={next}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </>
  )
}
PeoplePage.propTypes = {
  setErrorApi: PropTypes.func.isRequired,
}

export default withErrorApi(PeoplePage)
