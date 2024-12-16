import config from '../../../config'
import ApiError from '../../../errors/ApiError'
import { AcademicSemester } from '../academicSemester/academicSemester.model'
import { IStudent } from '../student/student.interface'
import { User } from './uesr.model'
import { IUser } from './user.interface'
import { generateStudentId } from './user.utils'

const createStudent = async (
  student: IStudent,
  user: IUser,
): Promise<IUser | null> => {
  // auto generated incremental id

  if (!user.password) {
    user.password = config.default_student_pass as string
  }

  // set role
  user.role = 'student'

  const academicSemester = await AcademicSemester.findById(
    student.academicSemester,
  )

  // generate student id
  const id = await generateStudentId(academicSemester)

  console.log(user)
  const createUser = await User.create(user)
  console.log(createUser)

  if (!createUser) {
    throw new ApiError(400, 'Failed to create user!')
  }

  return createUser
}

export const UserService = {
  createStudent,
}
