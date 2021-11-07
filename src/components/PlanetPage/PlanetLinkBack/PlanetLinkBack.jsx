import { useHistory } from 'react-router-dom'
import styles from './PlanetLinkBack.module.css'
import iconBack from './img/iconBack.png'

const PlanetLinkBack = () => {
  const history = useHistory()

  const handleGoBack = (e) => {
    e.preventDefault()
    history.goBack()
  }
  return (
    <a href='/#' onClick={handleGoBack} className={styles.link}>
      <img className={styles.link__img} src={iconBack} alt='Go back' />
      <span>Go back</span>
    </a>
  )
}

export default PlanetLinkBack
