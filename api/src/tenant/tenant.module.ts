import { SequelizeModule } from '@nestjs/sequelize';
import { Global, Module } from '@nestjs/common';
import { TenantService } from './tenant/tenant.service';

import { Account } from '../accounts/entities/account.entity';
import { AccountsService } from 'src/accounts/accounts.service';

@Global()
@Module({
  imports: [
    SequelizeModule.forFeature([Account])
  ],
  providers: [TenantService],
  exports: [TenantService],
})
export class TenantModule {}
