import { model, Schema } from 'mongoose'
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface'
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitle,
} from './academicSemester.const'
import ApiError from '../../../errors/ApiError'
import { StatusCodes } from 'http-status-codes'

const academicSemesterSchema = new Schema<IAcademicSemester>({
  title: {
    type: String,
    required: true,
    enum: academicSemesterTitle,
  },
  year: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    enum: academicSemesterCode,
  },
  startMonth: {
    type: String,
    required: true,
    enum: academicSemesterMonth,
  },
  endMonth: {
    type: String,
    required: true,
    enum: academicSemesterMonth,
  },
})

academicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  })
  if (isExist) {
    throw new ApiError(
      StatusCodes.CONFLICT,
      ' Academic semester is already exist!',
    )
  } else {
    next()
  }
})

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema,
)

// for stopping posting same year same semester we have to check the data before saving into the database
