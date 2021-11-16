import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateUsuarioDto } from "src/usuario/dto/create-usuario.dto";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateAtendenteDto extends CreateUsuarioDto {    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cpf: string;

    @ApiProperty()
    @Type(() => Usuario)
    usuario: Usuario;
}

