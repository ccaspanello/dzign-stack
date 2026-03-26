import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from './app-config.service';

const envFilePath =
  process.env.NODE_ENV === 'test' ? ['.env.test.local', '.env.test', '.env.local', '.env'] : ['.env.local', '.env'];

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: envFilePath,
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
