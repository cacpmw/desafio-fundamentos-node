import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class RetrieveTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): {
    transactions: Transaction[];
    balance: { income: number; outcome: number; total: number };
  } {
    const balance = this.transactionsRepository.getBalance();
    const transactions = this.transactionsRepository.all();

    return {
      transactions,
      balance,
    };
  }
}

export default RetrieveTransactionService;
