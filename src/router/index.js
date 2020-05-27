import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFound from '@/components/error-pages/NotFound'
import StudentDetails from '@/components/Student/StudentDetails'
import StudentCreate from '@/components/Student/StudentCreate'
import StudentUpdate from '@/components/Student/StudentUpdate'

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
      path: '/Students',
      name: 'StudentCreate',
      component: StudentCreate
    },
    {
      path: '/student/update/:id',
      name: 'StudentUpdate',
      component: StudentUpdate
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
