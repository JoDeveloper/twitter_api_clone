import helmet from '@fastify/helmet'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { NestFactory, Reflector } from '@nestjs/core'
import { QueryFailedFilter } from './filters/query-failed.filter'
import { ValidationPipe } from '@nestjs/common'


async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(), {
    cors: true,
    logger: ['error', 'warn', 'log'],
  }
  );
  const reflector = app.get(Reflector);

  await app.register(helmet);


  app.useGlobalFilters(
    new QueryFailedFilter(reflector),
  );

  // validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
    validationError: { target: false },
  }));



  // swagger config
  const config = new DocumentBuilder()
    .setTitle('NestJS  Twitter clone App')
    .setDescription('The App API description')
    .setVersion('1.0')
    .setBasePath('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);
  await app.listen(process.env.ADDRESS);
}
bootstrap();
