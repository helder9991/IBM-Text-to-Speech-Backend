import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('commentaries')
class Commentary {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'text' })
  commentary: string;

  @Column({ nullable: false, type: 'varchar' })
  filename: string;
}

export default Commentary;
