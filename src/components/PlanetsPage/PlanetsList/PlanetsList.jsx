import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import planetPlaceholder from './img/planetplaceholder.jpg'

import styles from './PlanetsList.module.css'

const Planets = ({ img, id, name }) => (
  <Link className={styles.list__item} to={`/planets/${id}`}>
    <img
      className={styles.planet__photo}
      src={img}
      alt={name}
      onError={(e) => {
        e.target.src = planetPlaceholder
      }}
    />
    <p>{name}</p>
  </Link>
)

const PlanetsList = ({ planets }) => (
  <ul className={styles.list__container}>
    {planets.map((item) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Planets key={item.id} {...item} />
    ))}
  </ul>
)

PlanetsList.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default PlanetsList
