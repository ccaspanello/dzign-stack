import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get helloWorldMessage(): string {
    return this.configService.get<string>('HELLO_WORLD_MESSAGE', 'Hello World!');
  }
}
