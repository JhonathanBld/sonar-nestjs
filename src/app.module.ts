import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { SwaggerModule } from '@nestjs/swagger';
import { AtendenteModule } from './atendente/atendente.module';
import { ClienteModule } from './cliente/cliente.module';
import { PrismaService } from './prisma/prisma.service';
import { APP_GUARD } from '@nestjs/core';
import { GrupoModule } from './grupo/grupo.module';

@Module({
  imports: [SwaggerModule, UsuarioModule,  AtendenteModule, ClienteModule, GrupoModule],
  controllers: [AppController],
  providers: [
    AppService, 
    PrismaService
  ],
})
export class AppModule {}
