import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { CreateUserDto } from '../dtos/user.dto';
import { UserEntity } from '../entities/user.entity';
import { UserService } from '../services/user.service';



@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private _userService: UserService) { }

  @Get('/@:username')
  getUserByUsername(@Param('username') username: string): Observable<UserEntity> | any {
    return this._userService.getUsersByUserByUserName(username);
  }

  @Get('/:userid')
  getUserByUserid(@Param('userid') userid: string): Observable<UserEntity> | any {
    return this._userService.getUserById(userid);
  }

  @Post('/')
  createNewUser(@Body() createUserDto: CreateUserDto): Observable<UserEntity> | any {
    return this._userService.createNewUser(createUserDto);
  }

  @Patch('/:userid')
  updateUserDetails(@Param('userid') userid: string): Observable<UserEntity> | any {
    return `details of user (id = ${userid}) updated`;
  }

  @Put('/:userid/follow')
  followUser(): Observable<UserEntity> | any {
    return 'you followed user';
  }

  @Delete('/:userid/follow')
  unfollowUser(): Observable<UserEntity> | any {
    return 'you unfollowed user';
  }

  @Get('/:userid/followers')
  getFollowersOfUser(): Observable<UserEntity> | any {
    return 'get followers of user';
  }

  @Put('/:userid/followees')
  getFolloweesOfUser(): Observable<UserEntity> | any {
    return `get followees of given user`;
  }
}
