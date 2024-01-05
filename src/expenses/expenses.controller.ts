import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { InputCreateExpenseDto } from './dto/api-input';

@Controller('/api/v1/expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get()
  getAllExpenses() {
    return {
      statusCode: 200,
      message: this.expensesService.expenses(),
    };
  }

  @Get('/:expenseId')
  getExpenseId(@Param('expenseId') expenseId: string) {
    return this.expensesService.getExpenseId(parseInt(expenseId));
  }

  @Post('/addExpense')
  createExpenses(@Body() createExpense: InputCreateExpenseDto) {
    console.log(createExpense);
    return this.expensesService.createExpense(createExpense);
  }
}
