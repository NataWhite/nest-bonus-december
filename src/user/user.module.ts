import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {PrismaService} from "../core/prisma.service";

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [UserService, PrismaService]
})
export class UserModule {}
