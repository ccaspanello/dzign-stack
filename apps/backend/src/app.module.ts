import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { AppConfigModule } from './config/app-config.module';

@Module({
  imports: [AppConfigModule, HelloModule],
})
export class AppModule {}
