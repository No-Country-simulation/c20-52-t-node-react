import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  await app.listen(PORT);
  Logger.log(`Backend ready in port ${PORT}`);
}
bootstrap();
