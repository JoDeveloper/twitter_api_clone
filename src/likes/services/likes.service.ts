import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { LikesEntity } from '../enitities/likes.entity'
import { Repository } from 'typeorm'

@Injectable()
export class LikesService {
  delete(id: number) {
    throw new Error('Method not implemented.')
  }
  save(newLike: LikesEntity) {
    throw new Error('Method not implemented.')
  }
  constructor(
    @InjectRepository(LikesEntity)
    private likesRepository: Repository<LikesEntity>
  ) { }
}
