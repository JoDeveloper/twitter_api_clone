import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('hashtags')
@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getHashtags(): string {
    // TODO: add actual logic
    return 'all top hashtags';
  }

  @Get('/:tag/posts')
  getPostsForHashtag(@Param('tag') tag: string): string {
    // TODO: add actual logic
    return `show all posts with hashtag ${tag}`;
  }
}
