import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function startApplication() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const port = 4500;
  await app.listen(port);
  console.log(`Application started port: ${port}`)
  
}
startApplication();
