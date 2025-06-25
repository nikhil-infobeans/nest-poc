import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './entity/user.entity';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService
    ){}
  @Post('register')
  register(@Body() createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto, '==createUserDto==');
    return this.userService.create(createUserDto);
  }
}
