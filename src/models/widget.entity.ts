/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Dashboard } from './dashboard.entity';

@Entity()
export class Widget {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  widgetType: string;

  @Column({type: 'integer'})
  minWidth: number;

  @Column()
  minHeight: number;

  @Column({type: 'json'})
  configs: string

  @ManyToOne((type) => Dashboard, (dashboard) => dashboard.widget, { eager: false })
  dashboard: Dashboard;
}
