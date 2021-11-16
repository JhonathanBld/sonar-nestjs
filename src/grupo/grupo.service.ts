import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';

@Injectable()
export class GrupoService {
  constructor(private readonly prisma: PrismaService) {
    
  }
  create(createGrupoDto: CreateGrupoDto) {  
    return this.prisma.grupo.create({
      data: createGrupoDto,
    });    
  }
  
  findAll() {
    return this.prisma.grupo.findMany();
  }
  
  findById(id: number) {
    return this.prisma.grupo.findUnique({ where: { id } });    
  }
  
  update(id: number, updateGrupoDto: UpdateGrupoDto) {
    return this.prisma.grupo.update({ where: {id} , data : updateGrupoDto});
  }
  
  remove(id: number) {
    return this.prisma.grupo.delete({ where: { id } });
  }
}
