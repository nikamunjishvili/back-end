import { IsString } from 'class-validator';

export class InputCreateExpenseDto {
  @IsString()
  type: string;

  @IsString()
  category: string;
}
