import { forwardRef, Module } from '@nestjs/common'
import { PostModule } from '../posts/post.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './entities/user.entity'
import { UsersController } from './controllers/users.controller'
import { UserService } from './services/user.service'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), forwardRef(() => PostModule)],
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule { }
