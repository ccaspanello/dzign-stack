import { Injectable } from '@nestjs/common';
import { AppConfigService } from '../config/app-config.service';

@Injectable()
export class HelloService {
  constructor(private configService: AppConfigService) {}

  getHello(): string {
    return this.configService.helloWorldMessage;
  }
}
