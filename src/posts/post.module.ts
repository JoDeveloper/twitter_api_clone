import { Module } from '@nestjs/common'
import { PostEntity } from './entities/post.entity'
import { PostsController } from './controllers/posts.controller'
import { PostService } from './services/post.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from '../users/user.module'


@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity]),
    UsersModule
  ],
  controllers: [PostsController],
  providers: [PostService],
  exports: [PostService]
})
export class PostModule { };
