import { IAcademicSemester } from '../academicSemester/academicSemester.interface'
import { User } from './uesr.model'

let lastUserId = 0

export const findLastStudentId = async (): Promise<string | undefined> => {
  const lastStudent = await User.findOne({ role: 'student' }, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()

  return lastStudent?.id ? lastStudent.id.substring(4) : undefined
}

// generate new student id with academic semester year and code..
export const generateStudentId = async (
  academicSemester: IAcademicSemester | null,
) => {
  const currentId =
    (await findLastStudentId()) || (0).toString().padStart(5, '0')

  // increment by 1
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  incrementedId = `${academicSemester?.year.substring(2)}${academicSemester?.code}${incrementedId}`

  return incrementedId
}

const findLastFacultyId = async (): Promise<string | undefined> => {
  const lastFaculty = await User.findOne({ role: 'faculty' }, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()

  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined
}
export const generateFucultyId = async (): Promise<string> => {
  const currentId =
    (await findLastFacultyId()) || (0).toString().padStart(5, '0')
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  incrementedId = `F-${incrementedId}`
  return incrementedId
}
