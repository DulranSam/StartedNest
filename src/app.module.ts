import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FortniteModule } from './fortnite/fortnite.module';
import { HomeController } from './home/home.controller';
import { HomeModule } from './home/home.module';

@Module({
  imports: [UsersModule, FortniteModule, HomeModule],
  controllers: [AppController, HomeController],
  providers: [AppService],
})
export class AppModule {}
