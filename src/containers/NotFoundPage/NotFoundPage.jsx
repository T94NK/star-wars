import { useLocation } from 'react-router-dom'
import img from './img/not-found.png'

import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
  const location = useLocation()

  return (
    <>
      <img className={styles.img} src={img} alt='Not found' />
      <p className={styles.text}>
        No match for <span>{location.pathname}</span>
      </p>
    </>
  )
}

export default NotFoundPage
