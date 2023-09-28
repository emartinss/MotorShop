import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Announcements")
class Announcement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  brand: string;

  @Column({ length: 45 })
  model: string;

  @Column({ length: 4 })
  year: string;

  @Column({ length: 20 })
  fuel: string;

  @Column({ type: "integer" })
  mileage: number;

  @Column({ length: 35 })
  color: string;

  @Column({ type: "integer" })
  fipe: number;

  @Column({ type: "integer" })
  price: number;

  @Column({ type: "text" })
  description: string;
}

export default Announcement;
