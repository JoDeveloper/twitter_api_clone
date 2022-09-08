import { AppBaseEntity } from '../../commons/entities/base.entity'
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne
  } from 'typeorm'
import { LikesEntity } from '../../likes/enitities/likes.entity'
import { UserEntity } from '../../users/entities/user.entity'

@Entity('posts')
export class PostEntity extends AppBaseEntity {
  @Column({ length: 240, nullable: true })
  text: string;

  @Column('json', { default: [] })
  images: Array<string>;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'author_id' })
  author: UserEntity;

  @Column({ name: 'like_count', default: 0 })
  likeCount: number;

  @Column({ name: 'repost_count', default: 0 })
  repostCount: number;

  @Column('json', { default: [] })
  hashtags: Array<string>;

  @Column('json', { default: [] })
  mentions: Array<Mention>;

  @OneToOne(() => PostEntity)
  @JoinColumn({ name: 'orig_post_id' })
  origPost: PostEntity;

  @OneToOne(() => PostEntity)
  @JoinColumn({ name: 'reply_to_id' })
  replyTo: PostEntity;

  @OneToMany(() => LikesEntity, (like) => like.post)
  likes: LikesEntity[]
}

class Mention {
  name: string;
  id: string;
}
