import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './posts/services/post.service';

import { HashtagsController } from './hashtags/controllers/hashtags.controller';
import { PostsController } from './posts/controllers/posts.controller';
import { UsersModule } from './users/user.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres1234",
      database: "twitterdb",
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      logger: "advanced-console",
      logging: "all"
    }),
    UsersModule,
  ],
  controllers: [HashtagsController, PostsController],
  providers: [
    PostService],
})
export class AppModule { }
