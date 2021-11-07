import { NavLink } from 'react-router-dom'
import Favorites from '../Favorites'

import styles from './Header.module.css'

const Header = () => (
  <div className={styles.container}>
    <ul className={styles.list__container}>
      <li>
        <NavLink to='/' exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/people/?page=1'>People</NavLink>
      </li>
      <li>
        <NavLink to='/planets/?page=1'>Planets</NavLink>
      </li>
      <li>
        <NavLink to='/not-found' exact>
          Not found
        </NavLink>
      </li>
    </ul>
    <Favorites />
  </div>
)

export default Header
