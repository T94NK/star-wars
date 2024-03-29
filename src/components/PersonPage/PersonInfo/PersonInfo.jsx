import PropTypes from 'prop-types'

import styles from './PersonInfo.module.css'

const PersonInfo = ({ personInfo }) => (
  <div className={styles.wrapper}>
    <ul className={styles.list__container}>
      {personInfo.map(
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

PersonInfo.propTypes = {
  personInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      data: PropTypes.string,
    })
  ).isRequired,
}

export default PersonInfo
