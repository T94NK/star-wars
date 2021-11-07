/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import UIButton from '../../UI/UIButton/UIButton'

import styles from './PeopleNavigation.module.css'

const PeopleNavigation = ({ getResource, prev, next, counterPage }) => {
  const handleChangeNext = () => getResource(next)
  const handleChangePrev = () => getResource(prev)

  return (
    <div className={styles.container}>
      <Link to={`/people/?page=${counterPage - 1}`} className={styles.buttons}>
        <UIButton
          className={styles.buttons}
          type='button'
          text='Previous'
          onClick={handleChangePrev}
          disabled={!prev}
        />
      </Link>
      <Link to={`/people/?page=${counterPage + 1}`} className={styles.buttons}>
        <UIButton
          type='button'
          text='Next'
          disabled={!next}
          onClick={handleChangeNext}
        />
      </Link>
    </div>
  )
}

PeopleNavigation.propTypes = {
  getResource: PropTypes.func.isRequired,
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  counterPage: PropTypes.number.isRequired,
}

export default PeopleNavigation
