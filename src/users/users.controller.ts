import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/add')
  addUser(@Body() body: { username: string; password: string }): string {
    return this.usersService.addUser(body);
  }
}
