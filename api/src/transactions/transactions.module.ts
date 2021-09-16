import { TenantService } from './../tenant/tenant/tenant.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

import { Transaction } from './entities/transaction.entity';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';

import { Account } from './../accounts/entities/account.entity';

@Module({
  imports: [SequelizeModule.forFeature([Transaction, Account])],
  controllers: [TransactionsController],
  providers: [TransactionsService, TenantService],
})
export class TransactionsModule {}
