import { Model, Types } from 'mongoose'

interface Username {
  firstName: string
  middleName?: string
  lastName: string
}

interface Gurdian {
  fatherName: string
  fatherOccupution: string
  fatherContactNo: string
  motherName: string
  motherOccupution: string
  motherContactNo: string
  address: string
}

interface LocalGurdian {
  name: string
  occupution: string
  contactNo: string
  address: string
}

export interface IStudent {
  id: string
  name: Username
  dateOfBirth?: string
  gender?: 'male' | 'female'
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  email: string
  contactNo: string
  emergencyContactNo: string
  presentAddress: string
  permanantAddress: string
  gurdian: Gurdian
  localGurdian?: LocalGurdian
  profileImage?: string
  academicFaculty: Types.ObjectId
  academicDepartment: Types.ObjectId
  academicSemester: Types.ObjectId
  createdAt?: Date
  updatedAt?: Date
}

export type UserModel = Model<IStudent, Record<string, unknown>>
