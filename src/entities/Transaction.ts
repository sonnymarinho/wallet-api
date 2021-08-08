import { model, Schema } from 'mongoose'
import { ITransaction } from '@entities/interface'

const schema = new Schema<ITransaction>({
  name: String,
  title: String,
  description: String,
  value: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export const Transaction = model<ITransaction>('Transaction', schema)
