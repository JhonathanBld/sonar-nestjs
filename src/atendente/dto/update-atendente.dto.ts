import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateAtendenteDto } from './create-atendente.dto';

export class UpdateAtendenteDto extends PartialType(CreateAtendenteDto) {

}
