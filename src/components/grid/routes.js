import GridPanel from './index'

export default (routes) => {
  routes.push(
    {
      path: '/grid',
      component: GridPanel
    }
  )
}
