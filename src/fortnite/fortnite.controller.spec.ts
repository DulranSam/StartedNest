import { Test, TestingModule } from '@nestjs/testing';
import { FortniteController } from './fortnite.controller';

describe('FortniteController', () => {
  let controller: FortniteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FortniteController],
    }).compile();

    controller = module.get<FortniteController>(FortniteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
