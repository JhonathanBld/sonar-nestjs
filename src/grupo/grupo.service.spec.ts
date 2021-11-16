import { Test, TestingModule } from '@nestjs/testing';
import TestUtil from 'src/common/test/TestUtil';
import { PrismaService } from 'src/prisma/prisma.service';
import { GrupoService } from './grupo.service';

describe('GrupoService', () => {

  const mockRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };


  let service: GrupoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrupoService, PrismaService],
    }).compile();

    service = module.get<GrupoService>(GrupoService);
  });

  beforeEach(() => {
    mockRepository.find.mockReset();
    mockRepository.findOne.mockReset();
    mockRepository.create.mockReset();
    mockRepository.save.mockReset();
    mockRepository.update.mockReset();
    mockRepository.delete.mockReset();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});
