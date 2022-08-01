import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {PrismaService} from "../core/prisma.service";
import {JwtService} from "@nestjs/jwt";

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [UserService, PrismaService, JwtService],
})
export class UserModule {}
