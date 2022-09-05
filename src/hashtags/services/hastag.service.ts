import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HashTagEntity } from '../entities/hashtag.entity';

@Injectable()
export class HashtagsService {
  constructor(
    @InjectRepository(HashTagEntity)
    private repository: Repository<HashTagEntity>
  ) { }

}
