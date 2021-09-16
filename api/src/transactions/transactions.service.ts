import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Transaction } from './entities/transaction.entity';

import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction) private transactionModel: typeof Transaction,
  ) {}

  create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return this.transactionModel.create({ ...createTransactionDto });
  }

  findAll(): Promise<Transaction[]> {
    return this.transactionModel.findAll();
  }
}
