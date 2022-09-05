import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikesController } from './controllers/likes.controller';
import { LikesEntity } from './enitities/likes.entity';
import { LikesService } from './services/likes.service';
@Module({
  imports: [TypeOrmModule.forFeature([LikesEntity])],
  controllers: [LikesController],
  providers: [LikesService],
  exports: [LikesService],
})
export class LikesModule { }
