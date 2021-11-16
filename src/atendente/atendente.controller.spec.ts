import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { AtendenteController } from './atendente.controller';
import { AtendenteService } from './atendente.service';

describe('AtendenteController', () => {
  let controller: AtendenteController;
  let service: AtendenteService;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtendenteController],
      providers: [AtendenteService, PrismaService],
    }).compile();
    
    controller = module.get<AtendenteController>(AtendenteController);
    service = module.get<AtendenteService>(AtendenteService);
  });
  
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
  describe('gets', () => {
    it('buscar todos os atendentes', async () => {
      const result:any = ['test'];
      jest.fn().mockResolvedValue([]);
      jest.spyOn(service, 'findAll').mockImplementation(() => result);
      
      expect(await controller.findAll()).toBe(result);
    });
    
    it('buscar usuario por id', async () => {
      const result:any = {};
      jest.fn().mockResolvedValue([]);
      jest.spyOn(service, 'findById').mockImplementation(() => result);
      expect(await controller.findById('1')).toBe(result);
    });
    
    
  });
});
