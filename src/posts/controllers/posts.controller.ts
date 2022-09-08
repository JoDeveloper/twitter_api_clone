import { ApiTags } from '@nestjs/swagger'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
  } from '@nestjs/common'
import { CreatePostDto } from '../dtos/create-post.dto'
import { Observable } from 'rxjs'
import { PostEntity } from '../entities/post.entity'
import { PostService } from '../services/post.service'
import { UserService } from '../../users/services/user.service'


@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(
    private _postService: PostService,
    private _usersService: UserService,
  ) { }
  @Get('/')
  getAllPosts(): Observable<PostEntity[]> | any {
    return this._postService.getAllPosts();
  }

  @Get('/:postid')
  getPostDetails(@Param('postid') postid: string): string {
    return `details of postid = ${postid}`;
  }

  @Post('/')
  createNewPost(@Body() createPostDto: CreatePostDto): Observable<PostEntity> | any {
    return this._postService.createNewPost(createPostDto);
  }

  @Delete('/:postid')
  deletePost(@Param('postid') postid: string): string {
    // TODO
    return `delete postid = ${postid}`;
  }

  @Put('/:postid/like')
  likePost(@Param('postid') postid: string): string {
    return `liked post ${postid}`;
  }

  @Delete('/:postid/like')
  unlikePost(@Param('postid') postid: string): string {
    return `unliked post ${postid}`;
  }
}
