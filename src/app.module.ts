import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpaceshipsModule } from './spaceships/spaceships.module';

@Module({
  imports: [
    SpaceshipsModule,
    MongooseModule.forRoot(
      'mongodb+srv://santiago:santiago@cluster0.9bgxj.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
