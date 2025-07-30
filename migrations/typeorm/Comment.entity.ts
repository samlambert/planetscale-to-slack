import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('comments')
@Index('idx_comments_on_post_id', ['postId'])
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'post_id' })
  postId: number;

  @Column('text')
  content: string;

  @Column({ length: 255 })
  author: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}