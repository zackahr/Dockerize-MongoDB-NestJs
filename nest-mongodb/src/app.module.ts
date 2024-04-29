import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './Users/users.mondule';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nestdb'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}