import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("images")
class Image{
    @PrimaryGeneratedColumn()
    id:number

    @Column({length:100})
    image_url:string
}

export default Image