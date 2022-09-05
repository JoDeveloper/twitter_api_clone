import {
  catchError,
  from,
  map,
  Observable
  } from 'rxjs'
import { CreateUserDto } from '../dtos/user.dto'
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException
  } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from '../entities/user.entity'

@Injectable()
export class UserService {


  constructor(
    @InjectRepository(UserEntity)
    private _userRepository: Repository<UserEntity>) { }

  /**
   * getAllUsers() : UserEntity[] | any
   */
  public getAllUsers(): Observable<UserEntity[]> | any {
    return from(this._userRepository.find({ cache: true })).pipe(
      map(users => {
        users.forEach(user => {
          delete user.password;
          delete user.deletedAt;
          user.username = user.username;
        });
        return users;
      }),
      catchError(error => {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      })
    );
  }

  /**
   * getUsersByUserByUserName(username:string): UserEntity | HttpException
   */
  public getUsersByUserByUserName(username: string): Observable<UserEntity> | HttpException {
    return from(this._userRepository.findOneBy({ username: username })).pipe(
      map(user => {
        return user;
      }),
      catchError(error => {
        throw new NotFoundException(`${error}`);
      })
    );
  }


  /**
   * getUserById(id: string): Observable<UserEntity> | HttpException 
   */
  public getUserById(id: string): Observable<UserEntity> | HttpException {
    return from(this._userRepository.findOneBy({ id: +id })).pipe(
      map(user => {
        return user;
      }),
      catchError(error => {
        throw new NotFoundException(`User ${id} does not exist`);
      })
    );
  }

  /**
   * createNewUser(createUserDto: CreateUserDto): Observable<UserEntity> | HttpException 
   */
  public createNewUser(createUserDto: CreateUserDto): any {
    return from(this._userRepository.save(createUserDto)).pipe(
      map((user: UserEntity) => {
        return user;
      }),
      catchError((error) => {
        throw new HttpException(`${error.detail}`, HttpStatus.BAD_REQUEST);
      })
    );
  }

}
