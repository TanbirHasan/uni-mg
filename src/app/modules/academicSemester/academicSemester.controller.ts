import { NextFunction, Request, Response } from 'express'
import { AcademicSemesterService } from './academicSemester.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { StatusCodes } from 'http-status-codes'

const createAcademicSemster = catchAsync(
  async (req: Request, res: Response) => {
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
export const AcademicSemesterController = {
  createAcademicSemster,
}
