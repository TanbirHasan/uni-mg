import { Response } from 'express'

type DataType<T> = {
  statusCode: number
  success: boolean
  message?: string | null
  meta?: {
    page: number
    limit: number
    total: number
  }
  data?: T | null
}

const sendResponse = <T>(res: Response, data: DataType<T>): void => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message || null,
    meta: data.meta || null || undefined,
    data: data.data || null,
  })
}

export default sendResponse
