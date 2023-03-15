import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DishDocument = HydratedDocument<Dish>;

@Schema()
export class Dish {
  @Prop()
  name: string;

  @Prop()
  price: number;
}

export const DishSchema = SchemaFactory.createForClass(Dish);
