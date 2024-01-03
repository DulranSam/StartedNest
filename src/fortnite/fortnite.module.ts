import { Module } from '@nestjs/common';
import { FortniteController } from './fortnite.controller';
import { FortniteService } from './fortnite.service';

@Module({ controllers: [FortniteController], providers: [FortniteService] })
export class FortniteModule {}
