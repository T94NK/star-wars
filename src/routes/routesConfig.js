import PeoplePage from '../containers/PeoplePage'
import HomePage from '../containers/HomePage'
import PersonPage from '../containers/PersonPage'
import NotFoundPage from '../containers/NotFoundPage'
import FavoritePage from '../containers/FavoritePage'
import PlanetsPage from '../containers/PlanetsPage'
import PlanetPage from '../containers/PlanetPage'

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/people',
    exact: true,
    component: PeoplePage,
  },
  {
    path: '/people/:id',
    exact: true,
    component: PersonPage,
  },
  {
    path: '/planets/:id',
    exact: true,
    component: PlanetPage,
  },
  {
    path: '/favorites',
    exact: true,
    component: FavoritePage,
  },
  {
    path: '/not-found',
    exact: true,
    component: NotFoundPage,
  },
  {
    path: '/planets',
    exact: true,
    component: PlanetsPage,
  },
  {
    path: '*',
    exact: false,
    component: NotFoundPage,
  },
]

export default routesConfig
