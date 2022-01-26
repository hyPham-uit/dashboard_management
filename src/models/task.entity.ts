/* eslint-disable prettier/prettier */
// import { Exclude } from 'class-transformer';
import { User } from './user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  task: string;

  @Column()
  isCompleted: boolean;

  @ManyToOne((type) => User, (user) => user.task, { eager: false })
  // @Exclude({toPlainOnly:true})
  user: User;
}
