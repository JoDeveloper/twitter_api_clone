import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { LikesEntity } from '../enitities/likes.entity';

@Injectable()
export class LikesService {
  constructor(private likesRepository: Repository<LikesEntity>) { }
}
