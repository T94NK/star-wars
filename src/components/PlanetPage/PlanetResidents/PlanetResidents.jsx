/* eslint-disable camelcase */
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { makeConcurrentRequest, changeHTTP } from '../../../utils/network'

import styles from './PlanetResidents.module.css'

const PlanetResidents = ({ planetResidents }) => {
  const [residentName, setResidentName] = useState([])

  useEffect(() => {
    ;(async () => {
      const residentsHTTPS = planetResidents.map((url) => changeHTTP(url))
      const response = await makeConcurrentRequest(residentsHTTPS)

      setResidentName(response)
    })()
  }, [])

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {residentName.map(({ name, birth_year }) => (
          <li className={styles.list__item} key={birth_year}>
            <span className={styles.item__episide}>Resident</span>
            <span className={styles.item__colon}> : </span>
            <span className={styles.item__title}>{name},</span>
            <span className={styles.item__title}>Born : {birth_year}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

PlanetResidents.propTypes = {
  planetResidents: PropTypes.arrayOf.isRequired,
}

export default PlanetResidents
