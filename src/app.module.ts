import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { NmailerModule } from './nmailer/nmailer.module';
import { AppLoggerMiddleware } from './middleware/http-logger.middleware';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/sumsar_online', {
      authSource: 'admin',
      user: 'mongoadmin',
      pass: 'sMANovKutman'
    }),
    UserModule,
    AuthModule,
    NmailerModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
