import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import holder from './img/holder.jpg'

import styles from './SearchPageInfo.module.css'

const SearchPageInfo = ({ people, planets }) => (
  <>
    {people.length ? (
      <ul className={styles.list__container}>
        {people.map(({ personId, personName, personImg }) => (
          <li className={styles.list__item} key={personId}>
            <Link to={`/people/${personId}`}>
              <img
                className={styles.person__photo}
                src={personImg}
                alt={personName}
              />
              <p className={styles.person__name}>{personName}</p>
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <h2 className={styles.person__comment}>No results</h2>
    )}

    {planets.length ? (
      <ul className={styles.list__container}>
        {planets.map(({ planetId, planetName, planetImg }) => (
          <li className={styles.list__item} key={planetId}>
            <Link to={`/planets/${planetId}`}>
              <img
                className={styles.person__photo}
                src={planetImg}
                onError={(e) => {
                  e.target.src = holder
                }}
                alt={planetName}
              />
              <p className={styles.person__name}>{planetName}</p>
            </Link>
          </li>
        ))}
      </ul>
    ) : null}
  </>
)

SearchPageInfo.propTypes = {
  people: PropTypes.arrayOf.isRequired,
  planets: PropTypes.arrayOf.isRequired,
}

export default SearchPageInfo
