import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HashTagModule } from './hashtags/hastag.module';
import { PostModule } from './posts/post.module';
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
      cache: {
        duration: 120000 // 120 seconds
      }
    }),
    UsersModule,
    PostModule,
    HashTagModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
