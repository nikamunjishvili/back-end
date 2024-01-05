import { Injectable } from '@nestjs/common';
import { InputCreateExpenseDto } from './dto/api-input';

@Injectable()
export class ExpensesService {
  private readonly data = [
    {
      id: 1,
      type: 'expense',
      category: 'shopping',
      createdAt: new Date(),
    },
    {
      id: 2,
      type: 'expense',
      category: 'cars',
      createdAt: new Date(),
    },
  ];

  expenses() {
    return this.data;
  }

  getExpenseId(id: number) {
    return this.data.find((exp) => exp.id === id);
  }

  createExpense(input: InputCreateExpenseDto) {
    return input;
  }
}
