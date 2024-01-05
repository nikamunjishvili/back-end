import { Module } from '@nestjs/common';
import { ExpensesModule } from './expenses/expenses.module';
import { ExpensesController } from './expenses/expenses.controller';
import { ExpensesService } from './expenses/expenses.service';

@Module({
  imports: [ExpensesModule],
  controllers: [ExpensesController],
  providers: [ExpensesService],
})
export class AppModule {}
