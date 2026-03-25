import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PrismaModule, UserModule,
        ConfigModule.forRoot({
            isGlobal: true, // makes env available everywhere
          })
        ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
