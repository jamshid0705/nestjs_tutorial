import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://jamshidshamshod0705:07052000@cluster0.whszxkx.mongodb.net/nestjs_tutorial?retryWrites=true&w=majority'),UserModule, CarModule],
})
export class AppModule {}
