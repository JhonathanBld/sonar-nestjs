import { Test, TestingModule } from '@nestjs/testing';
import { prismaMock } from 'singleton';
import { Atendente } from 'src/atendente/entities/atendente.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import TestUtil from 'src/common/test/TestUtil';
import { GrupoService } from 'src/grupo/grupo.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  let service: UsuarioService;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioService, PrismaService],
    }).compile();
    
    service = module.get<UsuarioService>(UsuarioService);
  });

  
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
  describe('gets', () => {
    
    it('buscar todos', async () => {      
      const result = await service.findAll();
      expect(result).toStrictEqual([]);
    });
    
    
    it('buscar por id', async () => {      
      const result = await service.findById(1);
      expect(result).toStrictEqual(null);
    });
    
  });
  
});
