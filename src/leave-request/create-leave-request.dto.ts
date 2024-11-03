import { IsNotEmpty, IsDateString, IsBoolean, Matches, MinLength, Validate } from 'class-validator';
import { IsBefore } from './is-before.validator';

export class CreateLeaveRequestDto {
  @IsNotEmpty()
  name: string;

  @IsDateString()
  @Validate(IsBefore, ['endDate'])
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsBoolean()
  isPaidLeave: boolean;

  @Matches(/^[A-Z]{3}-[1-9]{3}$/)
  employeeId: string;

  @MinLength(30)
  reason: string;
}