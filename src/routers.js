import VueRouter from 'vue-router'
import _ from 'lodash'
// const routers = ['character']
const routes = []

const requireAll = r => {
  r.keys().forEach(function (path) {
    if (!_.endsWith(path, '.spec.js')) {
      var router = r(path).default
      router(routes)
    }
  })
}
requireAll(require.context('./', true, /routes.js/))
export default new VueRouter({
  routes // （缩写）相当于 routes: routes
})
