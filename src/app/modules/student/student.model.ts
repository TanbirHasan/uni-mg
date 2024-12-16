import { model, Schema } from 'mongoose'
import { IStudent } from './student.interface'
import { StudentModel } from '../users/user.interface'

export const studentSchema = new Schema<IStudent, StudentModel>({
  id: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
      },
    },
    required: true,
  },
  dateOfBirth: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  email: {
    type: String,
    uniqu: true,
    required: true,
  },
  contactNo: {
    type: String,
    unique: true,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanantAddress: {
    type: String,
    required: true,
  },
  gurdian: {
    required: true,
    type: {
      fatherName: {
        type: String,
        required: true,
      },
      fatherOccupution: {
        type: String,
        required: true,
      },
      fatherContactNo: {
        type: String,
        required: true,
      },
      motherName: {
        type: String,
        required: true,
      },
      motherOccupution: {
        type: String,
        required: true,
      },
      motherContactNo: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
  },
  localGurdian: {
    type: {
      name: {
        type: String,
        required: true,
      },
      occupution: {
        type: String,
        required: true,
      },
      contactNo: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
  },
  profileImage: {
    type: String,
    required: true,
  },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicFaculty',
    required: true,
  },
  academicDepartment: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicDepartment',
    required: true,
  },
  academicSemester: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicSemester',
    required: true,
  },
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    }
})

export const Student = model<IStudent , StudentModel>('Student',studentSchema)