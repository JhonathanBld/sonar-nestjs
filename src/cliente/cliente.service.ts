import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClienteService {
  constructor(private readonly prisma: PrismaService) {
    
  }
  
  async create(createClienteDto: Prisma.ClienteCreateInput) { 
    return this.prisma.cliente.create({
      data: createClienteDto
    });
  }
  
  findAll() {
    return this.prisma.cliente.findMany();
  }
  
  findById(id: number) {
    return this.prisma.cliente.findUnique({ where: { id } });    
  }
  
  update(id: number, updateClienteDto: Prisma.ClienteUpdateInput) {
    return this.prisma.cliente.update({ where: {id} , data : updateClienteDto});
  }
  
  remove(id: number) {
    return this.prisma.cliente.delete({ where: { id } });
  }
}
