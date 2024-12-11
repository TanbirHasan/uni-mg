import { SortOrder } from 'mongoose'

import { academicFacultySearchableFields } from './academicFaculty.constants'
import {
  AcademicFacultyCreatedEvent,
  AcademicFacultyUpdatedEvent,
  IAcademicFaculty,
  IAcademicFacultyFilters,
} from './academicFaculty.interface'
import { AcademicFaculty } from './academicFaculty.model'
import { IGenericResponse } from '../academicSemester/academicSemester.interface'
import { paginationOptions } from '../../../interfaces/pagination'
import { paginationHelper } from '../../../helpers/paginationHelper'

const createFaculty = async (payload: IAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload)
  return result
}

const getSingleFaculty = async (
  id: string,
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findById(id)
  return result
}

const getAllFaculties = async (
  filters: IAcademicFacultyFilters,
  paginationOptions: paginationOptions,
): Promise<IGenericResponse<IAcademicFaculty[]>> => {
  // Extract searchTerm to implement search query
  const { searchTerm, ...filtersData } = filters

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(paginationOptions)

  const andConditions = []

  // Search needs $or for searching in specified fields
  if (searchTerm) {
    andConditions.push({
      $or: academicFacultySearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  // Filters needs $and to fullfill all the conditions
  console.log(filtersData)
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  // Dynamic sort needs  fields to  do sorting
  const sortConditions: { [key: string]: SortOrder } = {}
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }

  // If there is no condition , put {} to give all data
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {}

  const result = await AcademicFaculty.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)

  const total = await AcademicFaculty.countDocuments(whereConditions)

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

const updateFaculty = async (
  id: string,
  payload: Partial<IAcademicFaculty>,
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

const deleteByIdFromDB = async (
  id: string,
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findByIdAndDelete(id)
  return result
}

const insertIntoDBFromEvent = async (
  e: AcademicFacultyCreatedEvent,
): Promise<void> => {
  await AcademicFaculty.create({
    syncId: e.id,
    title: e.title,
  })
}

const updateOneInDBFromEvent = async (
  e: AcademicFacultyUpdatedEvent,
): Promise<void> => {
  await AcademicFaculty.findOneAndUpdate(
    { syncId: e.id },
    {
      $set: {
        title: e.title,
      },
    },
  )
}

const deleteOneFromDBFromEvent = async (syncId: string): Promise<void> => {
  await AcademicFaculty.findOneAndDelete({ syncId })
}

export const AcademicFacultyService = {
  createFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
  deleteByIdFromDB,
  insertIntoDBFromEvent,
  updateOneInDBFromEvent,
  deleteOneFromDBFromEvent,
}
