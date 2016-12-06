import Filtering from './filtering/filtering'

export default (routes) => {
  routes.push(
    {
      path: '/rxjs/filtering',
      component: Filtering
    }
  )
}
