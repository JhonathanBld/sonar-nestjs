import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { GrupoController } from './grupo.controller';
import { GrupoService } from './grupo.service';

describe('GrupoController', () => {
  let controller: GrupoController;
  let service: GrupoService;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrupoController],
      providers: [GrupoService, PrismaService],
    }).compile();
    
    service = module.get<GrupoService>(GrupoService);
    controller = module.get<GrupoController>(GrupoController);
  });
  
  
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
  
  describe('gets', () => {
    it('buscar todos os grupos', async () => {
      const result:any = ['test'];
      jest.fn().mockResolvedValue([]);
      jest.spyOn(service, 'findAll').mockImplementation(() => result);
      
      expect(await controller.findAll()).toBe(result);
    });
    
    it('buscar grupo por id', async () => {
      const result:any = {};
      jest.fn().mockResolvedValue([]);
      jest.spyOn(service, 'findById').mockImplementation(() => result);
      expect(await controller.findById('1')).toBe(result);
    });
    
    
  });
  
});