import { ITransaction } from '@entities/interface'
import { IBaseRepository } from './IBaseRepository'

export interface ITransactionsRepository
  extends IBaseRepository<ITransaction> {}
