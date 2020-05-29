import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFound from '@/components/error-pages/NotFound'
import StudentDetails from '@/components/Student/StudentDetails'
import StudentCreate from '@/components/Student/StudentCreate'
import StudentUpdate from '@/components/Student/StudentUpdate'
import CoursesList from '@/components/Course/CoursesList'
import CourseCreate from '@/components/Course/CourseCreate'
import StudentsInCourse from '@/components/Course/StudentsInCourse'

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
      path: '/Course/list',
      name: 'CoursesList',
      component: CoursesList
    },
    {
      path: '/Course/create',
      name: 'CourseCreate',
      component: CourseCreate
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
      path: '/Courses/:id',
      name: 'StudentsInCourse',
      component: StudentsInCourse
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
