import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAtendenteDto } from './dto/create-atendente.dto';
import { UpdateAtendenteDto } from './dto/update-atendente.dto';

@Injectable()
export class AtendenteService {
  constructor(private readonly prisma: PrismaService) {
    
  }
  
  async create(createAtendenteDto: CreateAtendenteDto) {
    return this.prisma.atendente.create({
      data: createAtendenteDto
    });
  }
  
  findAll() {
    return this.prisma.atendente.findMany();
  }
  
  findById(id: number) {
    return this.prisma.atendente.findUnique({ where: { id } });    
  }
  
  update(id: number, updateAtendenteDto: UpdateAtendenteDto) {
    return this.prisma.atendente.update({ where: {id} , data : updateAtendenteDto});
  }
  
  remove(id: number) {
    return this.prisma.atendente.delete({ where: { id } });
  }
}
