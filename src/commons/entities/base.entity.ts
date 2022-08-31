import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class AppBaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @CreateDateColumn({ name: "created_at", })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at", })
  deletedAt: Date;
}
