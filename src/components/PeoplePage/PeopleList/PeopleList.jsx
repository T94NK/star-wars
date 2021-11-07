import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './PeopleList.module.css'

const People = ({ img, id, name }) => (
  <Link className={styles.list__item} to={`/people/${id}`}>
    <img className={styles.person__photo} src={img} alt={name} />
    <p>{name}</p>
  </Link>
)

const PeopleList = ({ people }) => (
  <ul className={styles.list__container}>
    {people.map((item) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <People key={item.id} {...item} />
    ))}
  </ul>
)

PeopleList.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default PeopleList
