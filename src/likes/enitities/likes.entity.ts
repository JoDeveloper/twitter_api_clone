import { AppBaseEntity } from '../../commons/entities/base.entity'
import { Entity, JoinColumn, ManyToOne } from 'typeorm'
import { PostEntity } from '../../posts/entities/post.entity'
import { UserEntity } from '../../users/entities/user.entity'


@Entity('likes')
export class LikesEntity extends AppBaseEntity {
  @ManyToOne(() => PostEntity)
  @JoinColumn({ name: 'post_id' })
  post: PostEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
