import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { catchError, from, map, Observable, of } from 'rxjs';
import { CreateUserDto } from "../dtos/user.dto";
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from "../repository/user.repository";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserRepository)
    private _userRepository: UserRepository) { }


  /**
   * getUsersByUserByUserName(username:string): UserEntity | HttpException
   */
  public getUsersByUserByUserName(username: string): Observable<UserEntity> | HttpException {
    return from(this._userRepository.findOneBy({ username: username })).pipe(
      map((user: UserEntity) => {
        return user;
      }),
      catchError(() => {
        throw new NotFoundException("User not found");
      })
    );
  }


  /**
   * getUserById(id: string): Observable<UserEntity> | HttpException 
   */
  public getUserById(id: string): Observable<UserEntity> | HttpException {
    return from(this._userRepository.findOneBy({ id: +id })).pipe(
      map((user: UserEntity) => {
        return user;
      }),
      catchError(() => {
        throw new NotFoundException(`User ${id} does not exist`);
      })
    );
  }

  /**
   * createNewUser(createUserDto: CreateUserDto): Observable<UserEntity> | HttpException 
   */
  public createNewUser(createUserDto: CreateUserDto): Observable<UserEntity> | HttpException {

    return of(this._userRepository.create(createUserDto)).pipe(map((user: UserEntity) => user),
      catchError((error: HttpException) => {
        throw new HttpException(
          error.message, HttpStatus.BAD_REQUEST);
      })
    );
  }

}
