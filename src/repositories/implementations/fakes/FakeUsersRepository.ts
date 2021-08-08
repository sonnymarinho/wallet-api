import { IUser } from '@entities/interface'
import { User } from '@entities/User'
import { IUsersRepository } from '@repositories/interface/IUsersRepository'

class FakeUsersRepository implements IUsersRepository {
  private static users: IUser[] = []

  public async findByEmail(email: string): Promise<IUser | (null | undefined)> {
    const user = FakeUsersRepository.users.find((user) => {
      return user.email === email
    })

    return user
  }

  public async create(user: IUser): Promise<IUser> {
    const createdUser = new User(user)
    FakeUsersRepository.users.push(createdUser)

    return createdUser
  }

  public async update(user: IUser): Promise<IUser> {
    const index = FakeUsersRepository.users.findIndex((u) => u.id === user.id)

    const current = FakeUsersRepository[index]
    const updated = { ...current, ...user }

    FakeUsersRepository[index] = updated

    return FakeUsersRepository[index]
  }

  public async findById(id: string): Promise<IUser> {
    const founded = FakeUsersRepository.users.find(
      ({ id: userId }) => userId === id
    )
    return founded
  }

  public async delete(id: string): Promise<void> {
    const index = FakeUsersRepository.users.findIndex(
      ({ id: userId }) => userId === id
    )

    FakeUsersRepository.users.splice(index)
  }

  public static async truncate(): Promise<void> {
    FakeUsersRepository.users = []
  }
}

export { FakeUsersRepository }
