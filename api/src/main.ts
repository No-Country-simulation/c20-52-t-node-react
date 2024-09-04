import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }));
  await app.listen(PORT);
  Logger.log(`Backend ready in port ${PORT}`);
}
bootstrap();
