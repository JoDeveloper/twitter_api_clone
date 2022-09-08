import { IsNotEmpty, IsString } from 'class-validator'

export class CreatePostDto {

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNotEmpty()
  @IsString()
  author_id: string;

}
