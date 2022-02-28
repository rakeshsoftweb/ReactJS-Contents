import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  GetAllUser(): any {
    return ['user1', 'user2', 'user3'];
  }
  AddUser(): string {
    return 'User Added Successfully!!';
  }
}
