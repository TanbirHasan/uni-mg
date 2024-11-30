import { Model } from 'mongoose'

export type IAcademicSemsterMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type IAcademicSemesterTitle = 'Autumn' | 'Summer' | 'Fall'
export type IAcademicSemsterCode = '01' | '02' | '03'

export type IAcademicSemester = {
  title: IAcademicSemesterTitle
  year: number
  code: IAcademicSemsterCode
  startMonth: IAcademicSemsterMonth
  endMonth: IAcademicSemsterMonth
}

export type AcademicSemesterModel = Model<IAcademicSemester>
