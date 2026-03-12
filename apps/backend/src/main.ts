import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { writeFileSync } from 'fs';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

const setupSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('DZign Stack')
    .setDescription('The DZign Stack Starter Project')
    .setVersion('1.0')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) =>
      // Simplifies the operation ID by removing 'Controller' from the controller name
      `${controllerKey.replace('Controller', '')}_${methodKey}`,
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);

  // Write to swagger.json file locally for development flexibility
  const shouldWriteSwagger = process.env.WRITE_SWAGGER_FILE === 'true';
  if (shouldWriteSwagger) {
    const outputPath = join(__dirname, '..', 'swagger.json');
    writeFileSync(outputPath, JSON.stringify(document, null, 2), {
      encoding: 'utf8',
    });
  }
};

const setupCors = (app: INestApplication) => {
  app.enableCors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });
};

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  setupCors(app);
  await app.listen(process.env.PORT ?? 3000);
};

bootstrap().catch((err) => console.log(err));
