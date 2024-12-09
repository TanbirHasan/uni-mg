// import { NextFunction, Request, Response } from 'express'
// import { AcademicSemesterService } from './academicSemester.service'

// const createAcademicSemster = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const { ...academicSemesterData } = req.body
//     const result =
//       await AcademicSemesterService.createSemester(academicSemesterData)
//     res.status(200).json({
//       success: true,
//       message: 'Academic Semester created successfully',
//       data: result,
//     })
//   } catch (err) {
//     next(err)
//   }
// }

// export const AcademicSemesterController = {
//   createAcademicSemster,
// }

import { NextFunction, Request, Response } from 'express'
import { AcademicSemesterService } from './academicSemester.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { StatusCodes } from 'http-status-codes'
import pick from '../../../shared/pick'
import { paginationFields } from '../../../contants/pagination'
import { IAcademicSemester } from './academicSemester.interface'

const createAcademicSemster = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.body)
    const { ...academicSemesterData } = req.body
    const result =
      await AcademicSemesterService.createSemester(academicSemesterData)
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    })
  },
)

const getAllSemester = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, ['searchTerm', 'title', 'code', 'year'])
  const paginationOption = pick(req.query, paginationFields)
  const result = await AcademicSemesterService.getAllSemester(
    filters,
    paginationOption,
  )
  sendResponse<IAcademicSemester[]>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: '',
    meta: result.meta,
    data: result.data,
  })
})

const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await AcademicSemesterService.getSingleSemster(id)

  sendResponse<IAcademicSemester>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Semester retrived successfully',

    data: result,
  })
})

const updateSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await AcademicSemesterService.updateSemester(id, updatedData)

  sendResponse<IAcademicSemester>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Semester updated successfully',

    data: result,
  })
})

export const AcademicSemesterController = {
  createAcademicSemster,
  getAllSemester,
  getSingleSemester,
  updateSemester,
}
