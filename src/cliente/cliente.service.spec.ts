import { Test, TestingModule } from '@nestjs/testing';
import { Atendente } from 'src/atendente/entities/atendente.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { ClienteService } from './cliente.service';

describe('ClienteService', () => {
  let service: ClienteService;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClienteService, PrismaService],
    }).compile();
    
    service = module.get<ClienteService>(ClienteService);
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
