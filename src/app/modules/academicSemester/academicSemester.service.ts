import { StatusCodes } from 'http-status-codes'
import ApiError from '../../../errors/ApiError'
import { academicSemesterTitleCodeMapper } from './academicSemester.const'
import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'
import { paginationOptions } from '../../../interfaces/pagination'

const createSemester = async (
  payload: IAcademicSemester,
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    // Summer 02 !== 03
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Invalid Semester Code')
  }
  const result = await AcademicSemester.create(payload)
  return result
}

const getAllSemester = (paginationOption: paginationOptions) => {}

export const AcademicSemesterService = {
  createSemester,
  getAllSemester,
}
