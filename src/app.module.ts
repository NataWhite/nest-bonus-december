import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import {UserModule} from "./user/user.module";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PostModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
