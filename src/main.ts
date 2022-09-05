import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { QueryFailedFilter } from './filters/query-failed.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(), {
    cors: true,
    logger: ['error', 'warn', 'log'],
  }
  );
  const reflector = app.get(Reflector);

  app.useGlobalFilters(
    new QueryFailedFilter(reflector),
  );

  // validatio
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    validationError: { target: false },
  }));



  // swagger config
  const config = new DocumentBuilder()
    .setTitle('NestJS  Example App')
    .setDescription('The App API description')
    .setVersion('1.0')
    .setBasePath('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);
  await app.listen(3000);
}
bootstrap();
