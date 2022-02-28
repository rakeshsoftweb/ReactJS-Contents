import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getFullName(): string {
    const fname = this.appService.FullName();
    const age = this.appService.Age();
    return fname + age.toString();
  }

  @Get('/age')
  getAge(): number {
    return this.appService.Age();
  }

  @Get('/alluser')
  getAllUser(): any {
    return this.userService.GetAllUser();
  }
  @Get('adduser')
  addUser(): string {
    return this.userService.AddUser();
  }
}
