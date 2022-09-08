import {
  catchError,
  from,
  map,
  Observable
  } from 'rxjs'
import { CreatePostDto } from '../dtos/create-post.dto'
import { HttpException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { PostEntity } from '../entities/post.entity'
import { Repository } from 'typeorm'
/*
https://docs.nestjs.com/providers#services
*/


@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private repository: Repository<PostEntity>
  ) { }


  createNewPost(createPostDto: CreatePostDto): Observable<PostEntity> | any {
    return from(this.repository.save(createPostDto)).pipe(
      map(post => post),
      catchError(error => { throw new HttpException(error.message, error.status); })
    );
  }

  getAllPosts(): Observable<PostEntity[]> | any {
    return from(this.repository.find({ relations: ['likes'] })).pipe(
      map(posts => posts),
      catchError(error => { throw new HttpException(error.message, error.status) })
    );
  }
}
