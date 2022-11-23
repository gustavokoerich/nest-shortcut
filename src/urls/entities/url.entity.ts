import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'urls'})
export class UrlEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'url_code'})
    urlCode: string;

    @Column({name: 'long_url'})
    longUrl: string;
    
    @Column({name: 'short_url'})
    shortUrl: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: string;

    @UpdateDateColumn({name: 'updated_at'})
    updated_at: string;
}
