import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HashtagsController } from './hashtags/controllers/hashtags.controller';
import { PostsController } from './posts/controllers/posts.controller';
import { UsersController } from './users/controllers/users.controller';

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
  ],
  controllers: [HashtagsController, UsersController, PostsController],
  providers: [],
})
export class AppModule { }
