import express from 'express'

import validateRequest from '../../middlewares/validateRequest'

import { academicSemesterValidation } from './academicSemester.validation'
import { AcademicSemesterController } from './academicSemester.controller'

const router = express.Router()

router.post(
  '/create-semester',
  validateRequest(academicSemesterValidation.createAcademicSemesterZod),
  AcademicSemesterController.createAcademicSemster,
)

router.get('/:id', AcademicSemesterController.getSingleSemester)
router.patch(
  '/:id',
  validateRequest(academicSemesterValidation.updateAcademicSemesterZod),
  AcademicSemesterController.updateSemester,
)

router.get('/get-all-semester', AcademicSemesterController.getAllSemester)

export const SemesterRoutes = router
