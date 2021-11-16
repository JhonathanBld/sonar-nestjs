import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { AtendenteService } from './atendente.service';

describe('AtendenteService', () => {
  let service: AtendenteService;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtendenteService, PrismaService],
    }).compile();
    
    service = module.get<AtendenteService>(AtendenteService);
  });
  
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
  
  describe('gets', () => {
    
    it('buscar todos', async () => {      
      const result = await service.findAll();
      expect(result).toBeLessThan(0);
    });
    
    
    it('buscar por id', async () => {      
      const result = await service.findById(1);
      expect(result).toBeLessThan(0);
    });
    
  });
  
});
