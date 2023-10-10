import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./users.entity";
import Announcement from "./announcements.entity";

@Entity("Comments")
class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  comment: string;

  @ManyToOne(() => User, (user) => user.comments, { onDelete: "SET NULL" })
  user: User;

  @ManyToOne(() => Announcement, (anouncement) => anouncement.user, { onDelete: "SET NULL" })
  announcements: Announcement;
}

export default Comment;
