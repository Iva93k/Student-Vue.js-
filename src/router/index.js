import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFound from '@/components/error-pages/NotFound'
import StudentDetails from '@/components/Student/StudentDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Students/:id',
      name: 'StudentDetails',
      component: StudentDetails
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
