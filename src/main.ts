import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import { join} from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const swaggerDescription = await fs.readdirSync(join(__dirname, '..','description.markdown'));
  // const config = new DocumentBuilder()
  //     .setTitle('Okten bonus module')
  //     .setDescription(swaggerDescription.toString())
  //     .setVersion('1.0')
  //     .addTag('december')
  //     .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
