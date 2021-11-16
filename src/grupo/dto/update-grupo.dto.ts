import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateGrupoDto } from './create-grupo.dto';

export class UpdateGrupoDto extends PartialType(CreateGrupoDto) {
    @ApiProperty()
    @IsNumber()
    id: number;
}
