import { Account } from './../accounts/entities/account.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

import { Report } from './entities/report.entity';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { TenantService } from 'src/tenant/tenant/tenant.service';

@Module({
  imports: [  
    SequelizeModule.forFeature([Account]),
    SequelizeModule.forFeature([Report]),
  ],
  controllers: [ReportsController],
  providers: [ReportsService, TenantService],
})
export class ReportsModule {}
