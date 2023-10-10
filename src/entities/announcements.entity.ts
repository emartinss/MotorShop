import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./users.entity";
import Image from "./images.entity";
import Comment from "./comments.entity";

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

  @ManyToOne(() => User, (user) => user.announcements)
  user: User;

  @OneToMany(() => Image, (image) => image.announcement)
  image: Image;

  @OneToMany(() => Comment, (comment) => comment.announcements)
  comment: Comment[];
}

export default Announcement;
