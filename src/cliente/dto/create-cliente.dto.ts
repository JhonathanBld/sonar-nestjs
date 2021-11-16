import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber,  ValidateNested } from "class-validator";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateClienteDto {  
    @ApiProperty()
    @IsNumber()
    cpf: string;
    
    @ApiProperty()
    @ValidateNested({ each: true })
    @Type(() => Usuario)
    usuario: Usuario;
}
