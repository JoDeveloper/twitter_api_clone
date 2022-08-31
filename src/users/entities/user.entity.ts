import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  avatar: string;

  @Column({ length: 30, nullable: false, unique: true })
  username: string;

  @Column({ length: 240 })
  bio: string;

  @Column({ name: "follower_count", default: 0 })
  followerCount: number;

  @Column({ name: "following_count", default: 0 })
  followingCount: number;

  @Column('boolean', { default: false })
  verified: boolean;


}
