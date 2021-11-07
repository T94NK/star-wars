import img from '../../containers/NotFoundPage/img/not-found.png'
import styles from './ErrorMessage.module.css'

const ErrorMessage = () => (
  <>
    <img className={styles.img} src={img} alt='Not found' />
    <p className={styles.text}>Oops.. something gonna wrong :(</p>
  </>
)

export default ErrorMessage
