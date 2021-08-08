import { model, Schema } from 'mongoose'
import { IUser } from '@entities/interface/'

const schema = new Schema<IUser>({
  name: String,
  title: String,
  description: String,
  value: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export const User = model<IUser>('User', schema)
