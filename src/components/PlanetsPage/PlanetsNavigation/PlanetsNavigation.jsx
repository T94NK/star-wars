import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import UIButton from '../../UI/UIButton/UIButton'

import styles from './PlanetsNavigation.module.css'

const PlanetsNavigation = ({ getResource, prev, next, counterPage }) => {
  const handleChangeNext = () => getResource(next)
  const handleChangePrev = () => getResource(prev)

  return (
    <div className={styles.container}>
      <Link to={`/planets/?page=${counterPage - 1}`} className={styles.buttons}>
        <UIButton
          className={styles.buttons}
          type='button'
          text='Previous'
          onClick={handleChangePrev}
          disabled={!prev}
        />
      </Link>
      <Link to={`/planets/?page=${counterPage + 1}`} className={styles.buttons}>
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

PlanetsNavigation.propTypes = {
  getResource: PropTypes.func.isRequired,
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  counterPage: PropTypes.number.isRequired,
}

export default PlanetsNavigation
