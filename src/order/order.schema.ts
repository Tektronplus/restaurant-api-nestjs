import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  listDishes: Array<{ name: string; price: number }>;

  @Prop()
  tableNumber: number;

  @Prop()
  orderTotalPrice: number;

  @Prop()
  deliveryDate: Date;

  @Prop()
  creationDate: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
