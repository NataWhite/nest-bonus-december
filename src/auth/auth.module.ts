import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {UserService} from "../user/user.service";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {PrismaService} from "../core/prisma.service";

@Module({
  providers: [AuthService, UserService, JwtService, PrismaService],
  controllers: [AuthController],
  imports: [
      JwtModule.register({
        secret: 'secret',
        signOptions: {
          expiresIn: '24h'
        }
      })
  ]
})
export class AuthModule {}
