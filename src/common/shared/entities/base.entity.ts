import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'create_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_at', type: 'timestamptz' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'delete_at', type: 'timestamptz' })
  deletedAt: Date;
}
