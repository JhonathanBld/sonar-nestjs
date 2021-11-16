import { Module } from '@nestjs/common';
import { AtendenteService } from './atendente.service';
import { AtendenteController } from './atendente.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AtendenteController],
  providers: [AtendenteService, PrismaService]
})
export class AtendenteModule {}
