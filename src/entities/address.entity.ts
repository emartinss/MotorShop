import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./users.entity";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 9 })
  cep: string;

  @Column({ length: 2 })
  state: string;

  @Column({ length: 28 })
  city: string;

  @Column({ length: 45 })
  street: string;

  @Column({ type: "integer" })
  number: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  complement: string | null | undefined;

  @OneToOne(() => User, (user) => user.address) 
  @JoinColumn()
  user: User;
}

export default Address;
