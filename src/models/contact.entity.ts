/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  employeeId: string;
  
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  title: string;

  @Column()
  department: string;

  @Column()
  project: string;

  @Column()
  avatar: string;
}
