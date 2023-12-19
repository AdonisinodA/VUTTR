import { type FlattenMaps, type Types } from 'mongoose'

export type responseDatabase<T> = FlattenMaps<T> & {
  _id: Types.ObjectId
}
