import { NextFunction, Request, Response } from 'express'
import { UserService } from './user.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { StatusCodes } from 'http-status-codes'

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const {student, ...user } = req.body
  const result = await UserService.createStudent(student,user)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  })
})

export const UserController = {
  createStudent,
}
