import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

  @Column({ length: 50 })
  complement: string;
}

export default Address