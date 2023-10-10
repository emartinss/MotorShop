import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Announcement from "./announcements.entity";

@Entity("images")
class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  image_url: string;

  @ManyToOne(() => Announcement, (announcement) => announcement.image)
  announcement: Announcement[];
}

export default Image;
