/* eslint-disable prettier/prettier */
import { Dashboard } from './dashboard.entity';
import { Task } from './task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;  

  @Column()
  password: string;

  @Column()
  fullname: string;

  @OneToMany((type) => Task, (task) => task.user, { eager: true })
  task: Task[];

  @OneToMany((type) => Dashboard, (dashboard) => dashboard.user, { eager: true })
  dashboard: Dashboard[];
}
