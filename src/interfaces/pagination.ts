import { SortOrder } from "mongoose"

export type paginationOptions = {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: SortOrder
}
