import { IUser } from '@entities/interface'
import { User } from '@entities/User'
import { IUsersRepository } from '@repositories/interface/IUsersRepository'

class UsersRepository implements IUsersRepository {
  public async findByEmail(email: string): Promise<IUser | (null | undefined)> {
    const user = await User.findOne({ email }).exec()

    return user
  }

  public async create(user: IUser): Promise<IUser> {
    const newUser = new User(user)
    const createdUser = await newUser.save()

    return createdUser
  }

  public async update(user: IUser): Promise<IUser> {
    const updatedUser = await User.findByIdAndUpdate({ id: user.id }, user)

    return updatedUser
  }

  public async findById(id: string): Promise<IUser> {
    return User.findById(id)
  }

  public async delete(id: string): Promise<void> {
    await User.findByIdAndDelete(id)
  }
}

export { UsersRepository }
