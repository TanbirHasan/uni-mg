import { Response } from 'express'

type DataType<T> = {
  statusCode: number
  success: boolean
  message?: string | null
  data?: T | null
}

const sendResponse = <T>(res: Response, data: DataType<T>): void => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message || null,
    data: data.data || null,
  })
}

export default sendResponse
