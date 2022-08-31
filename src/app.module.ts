import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HashtagsController } from './hashtags/controllers/hashtags.controller';

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
  controllers: [HashtagsController],
  providers: [],
})
export class AppModule { }
