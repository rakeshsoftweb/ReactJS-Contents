import { Injectable } from '@nestjs/common';
import { ClientDTO } from './client.dto';
import { LoggerService } from './logger.service';
import { UserService } from '../services/user.service'

@Injectable()
export class ClientService {
constructor(private readonly logger : LoggerService, private readonly userService : UserService) {}
  client:ClientDTO = {
    clientName: 'Abc100',
    address: 'h.no.123',
    phone: 123456,
    areacode: 1,
  };
  
  getAllClient():any {
    console.log(this.client.clientName);
    console.log(this.client.phone);
    this.logger.LogWritting();
    // 
    this.userService.UserDisplay();
    return this.client;
  }
}
