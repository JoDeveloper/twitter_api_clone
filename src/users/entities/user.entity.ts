import { AppBaseEntity } from '../../commons/entities/base.entity'
import { Column, Entity, OneToMany } from 'typeorm'
import { PostEntity } from '../../posts/entities/post.entity'



@Entity('users')
export class UserEntity extends AppBaseEntity {


  @Column({ length: 50 })
  name: string;

  @Column({ length: 50, nullable: true })
  avatar: string;

  @Column({ length: 30, nullable: false, unique: true })
  username: string;

  @Column({ length: 240, nullable: true })
  bio: string;

  @Column({ name: "follower_count", default: 0 })
  followerCount: number;

  @Column({ name: "following_count", default: 0 })
  followingCount: number;

  @Column('boolean', { default: false })
  verified: boolean;

  @Column({ nullable: true })
  password: string;

  @OneToMany(() => PostEntity, (post) => post.author)
  posts: PostEntity[]


}
