import Vue from 'vue'
import Router from 'vue-router'
import new_list from '@/components/new'
import popular from '@/components/popular'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/new/',
      name: 'new',
      component: new_list
    },
    {
        path: '/popular/',
        name: 'popular',
        component: popular
    },
    {
        path: "/",
        redirect: "/new/"
    },
    {
      path: "*",
      redirect: "/new/"
  }
  ]
})
