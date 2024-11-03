import config from '../../../config'
import ApiError from '../../../errors/ApiError'
import { User } from './uesr.model'
import { IUser } from './user.interface'
import { generateUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generateUserId()
  user.id = id

  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  console.log(user)
  const createUser = await User.create(user)
  console.log(createUser)

  if (!createUser) {
    throw new ApiError(400, 'Failed to create user!')
  }

  return createUser
}

export const UserService = {
  createUser,
}
