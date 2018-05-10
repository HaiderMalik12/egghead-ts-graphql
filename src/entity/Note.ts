import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('notes')
export class Note extends BaseEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() title: string;
  @Column('text') content: string;
}
