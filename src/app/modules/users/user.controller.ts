import { NextFunction, Request, Response } from 'express'
import { UserService } from './user.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { StatusCodes } from 'http-status-codes'

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body
    const result = await UserService.createUser(user)
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    })
  },
)

export const UserController = {
  createUser,
}
