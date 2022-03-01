import { Module } from '@nestjs/common';
import { ClientModule } from './Clients/client.module';
@Module({
  imports: [ClientModule],
})
export class AppModule {}
