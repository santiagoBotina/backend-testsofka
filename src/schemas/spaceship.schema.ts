import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SpaceshipDocument = Spaceship & Document;

@Schema()
export class Spaceship {
  @Prop()
  name: string;

  @Prop()
  type?: string;

  @Prop()
  weight: number;

  @Prop()
  width: number;

  @Prop()
  power: number;

  @Prop()
  fuel: string;

  @Prop()
  canTransport: boolean;

  @Prop()
  speed: number;
}

export const SpaceshipSchema = SchemaFactory.createForClass(Spaceship);
