import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';
import { AppConfigModule } from '../config/app-config.module';

describe('HelloController', () => {
  let helloController: HelloController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppConfigModule],
      controllers: [HelloController],
      providers: [HelloService],
    }).compile();
    helloController = app.get<HelloController>(HelloController);
  });

  describe('root - Hello Earthlings!', () => {
    it('should return "Hello Earthlings!"', () => {
      expect(helloController.getHello()).toBe('Hello Earthlings!');
    });
  });
});
