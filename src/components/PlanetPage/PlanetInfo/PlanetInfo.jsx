import PropTypes from 'prop-types'

import styles from './PlanetInfo.module.css'

const PlanetInfo = ({ planetInfo }) => (
  <div className={styles.wrapper}>
    <ul className={styles.list__container}>
      {planetInfo.map(
        ({ title, data }) =>
          data && (
            <li key={title} className={styles.list__item}>
              <span className={styles.item__title}>
                {title}: {data}
              </span>
            </li>
          )
      )}
    </ul>
  </div>
)

PlanetInfo.propTypes = {
  planetInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      data: PropTypes.string,
    })
  ).isRequired,
}

export default PlanetInfo
