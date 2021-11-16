import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Prisma } from '.prisma/client';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: Prisma.UsuarioCreateInput) {      
    return this.usuarioService.create(createUsuarioDto);  
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.usuarioService.findById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: Prisma.UsuarioUpdateInput) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
