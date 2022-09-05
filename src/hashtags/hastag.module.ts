import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HashtagsController } from './controllers/hashtags.controller';
import { HashTagEntity } from './entities/hashtag.entity';
import { HashtagsService } from './services/hastag.service';

@Module({
  imports: [TypeOrmModule.forFeature([HashTagEntity])],
  controllers: [HashtagsController],
  providers: [HashtagsService],
  exports: [HashtagsService],
})
export class HashTagModule { };
