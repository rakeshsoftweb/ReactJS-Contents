import { Module } from '@nestjs/common';
import { ClientModule } from './Clients/Client.Module'
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [ClientModule, MongooseModule.forRoot('mongodb://localhost:27017/mydb')],
})
export class AppModule {}
