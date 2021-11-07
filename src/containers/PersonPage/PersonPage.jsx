import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import PersonFilms from '../../components/PersonPage/PersonFilms/PersonFilms'
import PersonInfo from '../../components/PersonPage/PersonInfo'
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack/PersonLinkBack'
import PersonPhoto from '../../components/PersonPage/PersonPhoto'
import { API_PERSON } from '../../constants/api'
import { withErrorApi } from "../../HOC's/withErrorApi"
import { getPeopleImage } from '../../services/getPeopleData'
import { getApiResource } from '../../utils/network'
import styles from './PersonPage.module.css'

const PersonPage = ({ match, setErrorApi }) => {
  const [person, setPerson] = useState({})
  const [personFav, setPersonFav] = useState(false)

  const storeDate = useSelector((state) => state.favoriteReducer.myFavorites)

  useEffect(() => {
    const getPerson = async () => {
      const { id } = match.params
      const res = await getApiResource(`${API_PERSON}/${id}`)

      if (id) {
        const human = storeDate.find((i) => i.personId === id)

        // eslint-disable-next-line no-unused-expressions
        human ? setPersonFav(true) : setPersonFav(false)
      }

      if (res) {
        const info = [
          { title: 'Height', data: res.height },
          { title: 'Mass', data: res.mass },
          { title: 'Hair', data: res.hair_color },
          { title: 'Skin', data: res.skin_color },
          { title: 'Birthday', data: res.birth_year },
          { title: 'Gender', data: res.gender },
        ]

        setPerson({
          info,
          id,
          name: res.name,
          img: getPeopleImage(id),
          films: res.films,
        })

        setErrorApi(false)
      } else {
        setErrorApi(true)
      }
    }

    getPerson()
  }, [storeDate])

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{person.name}</span>

        <div className={styles.container}>
          <PersonPhoto
            personPhoto={person.img}
            personName={person.name}
            personId={person.id}
            personFav={personFav}
            setPersonFav={setPersonFav}
          />

          {person.info && <PersonInfo personInfo={person.info} />}
          {person.films && <PersonFilms personFilms={person.films} />}
        </div>
      </div>
    </>
  )
}

PersonPage.propTypes = {
  setErrorApi: PropTypes.func.isRequired,
  match: PropTypes.func.isRequired,
}

export default withErrorApi(PersonPage)
