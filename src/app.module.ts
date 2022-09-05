import { ConfigModule } from '@nestjs/config'
import { HashTagModule } from './hashtags/hastag.module'
import { Module } from '@nestjs/common'
import { PostModule } from './posts/post.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/user.module'




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST,
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      logger: "advanced-console",
      cache: {
        duration: +process.env.CACHE_DURATION
      }
    }),
    ConfigModule.forRoot({}),
    UsersModule,
    PostModule,
    HashTagModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
