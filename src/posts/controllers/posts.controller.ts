import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostService } from '../services/post.service';


@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(
    private service: PostService
  ) { }
  @Get('/')
  getAllPosts(): string {
    // TODO
    return 'get all posts';
  }

  @Get('/:postid')
  getPostDetails(@Param('postid') postid: string): string {
    // TODO
    return `details of postid = ${postid}`;
  }

  @Post('/')
  createNewPost(): string {
    // TODO
    return `new post was created`;
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
