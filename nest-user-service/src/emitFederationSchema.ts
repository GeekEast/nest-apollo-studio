import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function emitFederationSchema() {
  const app = await NestFactory.create(AppModule, { logger: false });
  await app.init();
}

emitFederationSchema();
