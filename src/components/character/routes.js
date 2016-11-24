import Character from './Character'

export default (routes) => {
  routes.push(
    {
      path: '/character',
      component: Character
    }
  )
}
