import { BeforeInsert, BeforeUpdate, Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import Comment from "./comments.entity";
import Address from "./address.entity";
import Announcement from "./announcements.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ length: 90 })
  password: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ length: 11 })
  phone: string;

  @Column({ length: 10 })
  date_of_birth: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "boolean" })
  is_advertiser: boolean;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToOne(() => Address, (address) => address.user)
  address: Address;

  @OneToMany(() => Announcement, (announcement) => announcement.user)
  announcements: Announcement[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const hasRounds: number = getRounds(this.password);
    if (!hasRounds) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export default User;
