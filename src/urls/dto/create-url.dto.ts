import { IsEmpty, IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";
import { IsNull } from "typeorm";

export class CreateUrlDto {
    @IsNotEmpty()
    @IsString()
    longUrl: string;
}
