import { Injectable } from '@nestjs/common';
import { CreateLeaveRequestDto } from './create-leave-request.dto';
import { validate } from 'class-validator';

@Injectable()
export class LeaveRequestService {
  async validateLeaveRequest(createLeaveRequestDto: CreateLeaveRequestDto): Promise<string[]> {
    const errors = await validate(createLeaveRequestDto);
    return errors.map(err => Object.values(err.constraints).join(', '));
  }

  async create(createLeaveRequestDto: CreateLeaveRequestDto): Promise<void> {
   
  }
}