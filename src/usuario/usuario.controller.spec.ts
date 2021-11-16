import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

describe('UsuarioController', () => {
  let controller: UsuarioController;
  let service: UsuarioService;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [UsuarioService, PrismaService],
    }).compile();
    
    service = module.get<UsuarioService>(UsuarioService);
    controller = module.get<UsuarioController>(UsuarioController);
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
    
    it('buscar usuario por id', async () => {
      const result:any = {};
      jest.fn().mockResolvedValue([]);
      jest.spyOn(service, 'findById').mockImplementation(() => result);
      expect(await controller.findById('1')).toBe(result);
    });
    
    
  });
  
});