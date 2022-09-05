import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from './controllers/posts.controller';
import { PostEntity } from './entities/post.entity';
import { PostService } from './services/post.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity])
  ],
  controllers: [PostsController],
  providers: [PostService],
  // exports: [PostService]
})
export class PostModule { };
