import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';

describe('ClienteController', () => {
  let controller: ClienteController;
  let service: ClienteService;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClienteController],
      providers: [ClienteService, PrismaService],
    }).compile();
    
    service = module.get<ClienteService>(ClienteService);
    controller = module.get<ClienteController>(ClienteController);
  });
  
  
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
  
  describe('gets', () => {
    it('buscar todos os usuarios', async () => {
      const result:any = ['test'];
      jest.fn().mockResolvedValue([]);
      jest.spyOn(service, 'findAll').mockImplementation(() => result);
      
      expect(await controller.findAll()).toBe(result);
    });
    
    it('buscar cliente por id', async () => {
      const result:any = {};
      jest.fn().mockResolvedValue([]);
      jest.spyOn(service, 'findById').mockImplementation(() => result);
      expect(await controller.findById('1')).toBe(result);
    });
    
    
  });

  
});