import { Body, Controller, Post, Res, Get } from '@nestjs/common';
import { CreateLeaveRequestDto } from './create-leave-request.dto';
import { LeaveRequestService } from './leave-request.service';
import { Response } from 'express';

@Controller('leave-request')
export class LeaveRequestController {
  constructor(private readonly leaveRequestService: LeaveRequestService) {}

  @Post()
  async create(@Body() createLeaveRequestDto: CreateLeaveRequestDto, @Res() res: Response) {
    const errors = await this.leaveRequestService.validateLeaveRequest(createLeaveRequestDto);
    if (errors.length > 0) {
      return res.status(400).render('index', { errors, data: createLeaveRequestDto });
    }
    await this.leaveRequestService.create(createLeaveRequestDto);
    return res.redirect('/leave-request/success');
  }

  @Get('/success')
  success(@Res() res: Response) {
    return res.render('success');
  }
}