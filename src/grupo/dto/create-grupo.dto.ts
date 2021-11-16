import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateGrupoDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nome: string;

}
