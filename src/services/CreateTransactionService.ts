import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(data: {
    title: string;
    value: number;
    type: 'income' | 'outcome';
  }): Transaction {
    const { total } = this.transactionsRepository.getBalance();
    if (data.type === 'outcome' && total < data.value) {
      throw Error('Invalid operation');
    }
    const transaction = this.transactionsRepository.create(data);
    return transaction;
  }
}

export default CreateTransactionService;
