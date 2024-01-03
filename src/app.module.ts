import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FortniteModule } from './fortnite/fortnite.module';

@Module({
  imports: [UsersModule, FortniteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
