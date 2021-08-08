export interface IBaseRepository<T> {
  create(user: T): Promise<T>
  update(user: T): Promise<T>
  findById(id: string): Promise<T>
  delete(id: string): Promise<void>
}
