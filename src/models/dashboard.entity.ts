/* eslint-disable prettier/prettier */
import { User } from './user.entity';
import { Column, ManyToOne, OneToMany, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Widget } from './widget.entity';

@Entity()
export class Dashboard {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  layoutType: string;

  @ManyToOne((type) => User, (user) => user.dashboard, { eager: false })
  user: User;

  @OneToMany((type) => Widget, (widget) => widget.dashboard, { eager: true })
  widget: Widget[];
}
