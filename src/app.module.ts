import { Module } from '@nestjs/common';

import { HashtagsController } from './hashtags/hashtags.controller';

@Module({
  imports: [],
  controllers: [HashtagsController],
  providers: [],
})
export class AppModule { }
