import welcome from './img/youre-welcome.jpg'

import styles from './HomePage.module.css'

const HomePage = () => (
    <>
      <h1 className='header__text'>Here you can find some information about Star Wars characters or Planets!!</h1>
      <img className={styles.main__img} src={welcome} alt="You're welcome" />
    </>
  )

export default HomePage
