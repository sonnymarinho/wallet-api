import { ITransaction } from '@entities/interface'
import { Transaction } from '@entities/Transaction'
import { ITransactionsRepository } from '@repositories/interface'

class TransactionsRepository implements ITransactionsRepository {
  public async create(transaction: ITransaction): Promise<ITransaction> {
    const newTransaction = new Transaction(Transaction)
    const createdTransaction = await newTransaction.save()

    return createdTransaction
  }

  public async update(transaction: ITransaction): Promise<ITransaction> {
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      { id: transaction.id },
      transaction
    )

    return updatedTransaction
  }

  public async findById(id: string): Promise<ITransaction> {
    return Transaction.findById(id)
  }

  public async delete(id: string): Promise<void> {
    await Transaction.findByIdAndDelete(id)
  }
}

export { TransactionsRepository }
