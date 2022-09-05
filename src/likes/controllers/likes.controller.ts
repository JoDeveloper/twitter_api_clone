import { ApiTags } from '@nestjs/swagger'
import { Controller } from '@nestjs/common'
import { LikesService } from '../services/likes.service'

@ApiTags('likes')
@Controller('likes')
export class LikesController {
  constructor(
    private readonly likesService: LikesService
  ) { }

}
