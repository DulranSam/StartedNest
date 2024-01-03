import { Test, TestingModule } from '@nestjs/testing';
import { FortniteService } from './fortnite.service';

describe('FortniteService', () => {
  let service: FortniteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FortniteService],
    }).compile();

    service = module.get<FortniteService>(FortniteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
