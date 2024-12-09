import {
  IAcademicSemesterTitle,
  IAcademicSemsterCode,
  IAcademicSemsterMonth,
} from './academicSemester.interface'

export const academicSemesterMonth: IAcademicSemsterMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const academicSemesterCode: IAcademicSemsterCode[] = ['01', '02', '03']
export const academicSemesterTitle: IAcademicSemesterTitle[] = [
  'Autumn',
  'Summer',
  'Fall',
]

export const academicSemesterTitleCodeMapper: {
  [key: string]: string
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
}
export const academicSemesterSearchableFields = ['title', 'code', 'year']
