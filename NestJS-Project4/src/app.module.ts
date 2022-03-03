import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ClientModule } from './Clients/Client.Module'
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './logger/logger.middlware';
import { UserController } from './User.Controller';
@Module({
  imports: [ClientModule, MongooseModule.forRoot('mongodb://localhost:27017/mydb')],
  controllers:[UserController]
})
export class AppModule implements NestModule
{
  configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(LoggerMiddleware)
      .forRoutes('user','client');
  }
}
