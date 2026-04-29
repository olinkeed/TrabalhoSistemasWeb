import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("atletas")
class Atleta {
  @PrimaryGeneratedColumn("uuid")
  id_atleta: string;

  @Column()
  nome: string;

  @Column({ type: "date" })
  data_nascimento: string;

  @Column({ length: 1 })
  sexo: string;

  @Column()
  nacionalidade: string;

  @Column("decimal", { precision: 5, scale: 2 })
  peso: number;

  @Column("decimal", { precision: 4, scale: 2 })
  altura: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Atleta;
