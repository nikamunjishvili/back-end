import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://NikaMunjishvili:nick12345@free-auth-app.fxyguaz.mongodb.net/',
    ),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
