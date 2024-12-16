import { Model, Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    student : {
      ref : 'Student',
      type : Schema.Types.ObjectId
    },
    faculty : {
      ref : 'Faculty',
      type : Schema.Types.ObjectId
    },
    admin : {
      ref : 'Admin',
      type : Schema.Types.ObjectId
    }
  },
  { timestamps: true },
)

export const User = model<IUser, UserModel>('User', userSchema)
