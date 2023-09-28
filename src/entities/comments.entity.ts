import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Comments")
class Comment {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "text" })
  comment: string;
}

export default Comment