import { IsBoolean, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from 'class-transformer';
import { Atendente } from "src/atendente/entities/atendente.entity";
import { Cliente } from "src/cliente/entities/cliente.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";

export class CreateUsuarioDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty()
    @IsString() 
    @IsNotEmpty()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    senha: string;

    @ApiProperty()
    @IsBoolean()
    ativo: boolean;

    @IsBoolean()
    id_grupo: number;
    
    @ApiProperty()
    atendente: Atendente;
    
    @ApiProperty()
    @Type(() => Cliente)
    cliente: Cliente; 
    
    @ApiProperty()
    @Type(() => Grupo)
    grupo: Grupo;    
   
}
