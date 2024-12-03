import { NextFunction, Request, Response } from 'express'
import { AcademicSemesterService } from './academicSemester.service'

const createAcademicSemster = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { ...academicSemesterData } = req.body
    const result =
      await AcademicSemesterService.createSemester(academicSemesterData)
    res.status(200).json({
      success: true,
      message: 'Academic Semester created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const AcademicSemesterController = {
  createAcademicSemster,
}

// import { NextFunction, Request, Response } from 'express'
// import { AcademicSemesterService } from './academicSemester.service'
// import catchAsync from '../../../shared/catchAsync'
// import sendResponse from '../../../shared/sendResponse'
// import { StatusCodes } from 'http-status-codes'

// const createAcademicSemster = catchAsync(
//   async (req: Request, res: Response) => {
//     console.log(req.body)
//     const { ...academicSemesterData } = req.body
//     const result =
//       await AcademicSemesterService.createSemester(academicSemesterData)
//     sendResponse(res, {
//       statusCode: StatusCodes.OK,
//       success: true,
//       message: 'Academic semester created successfully',
//       data: result,
//     })
//   },
// )
// export const AcademicSemesterController = {
//   createAcademicSemster,
// }
