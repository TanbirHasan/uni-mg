import express from 'express'
import { UserRoutes } from '../modules/users/user.route'
import { SemesterRoutes } from '../modules/academicSemester/acadmicSemester.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semester/',
    route: SemesterRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
