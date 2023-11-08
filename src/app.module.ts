import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [UserModule, CarModule],
})
export class AppModule {}
