import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [UserModule, CarModule],
  controllers: [AppController, UserController],
  providers: [AppService],
  exports:[]
})
export class AppModule {}
