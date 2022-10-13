import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from 'src/auth/auth.module';
import { ForgotPasswordSchema } from './schemas/forgot-password.schema';
import { NmailerModule } from 'src/nmailer/nmailer.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'ForgotPassword', schema: ForgotPasswordSchema}]),
    AuthModule,
    NmailerModule
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
