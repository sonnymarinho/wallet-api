import { IUser } from '@entities/interface'
import { IBaseRepository } from './IBaseRepository'

export interface IUsersRepository extends IBaseRepository<IUser> {
  findByEmail(email: string): Promise<IUser | (null | undefined)>
}
