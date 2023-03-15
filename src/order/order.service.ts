import { Injectable } from '@nestjs/common';
import { Order, OrderDocument } from './order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  addOrder(orderData: {
    dishesList: Array<{ name: string; price: number }>;
    tableNumber: number;
    deliveryDate: string;
  }): string {
    const newOrder = new this.orderModel();
    newOrder.listDishes = orderData.dishesList;
    newOrder.tableNumber = orderData.tableNumber;

    newOrder.orderTotalPrice = orderData.dishesList.reduce(
      (acc, cur) => acc + cur.price,
      0,
    );

    if (orderData.deliveryDate === undefined) {
      newOrder.deliveryDate = new Date(Date.now());
    } else {
      newOrder.deliveryDate = new Date(orderData.deliveryDate);
    }
    newOrder.creationDate = new Date(Date.now());

    newOrder.save();
    return 'New Order Added';
  }

  async getOrderByTableNumber(tableNumber: number): Promise<Array<any>> {
    return this.orderModel.find({ tableNumber: tableNumber });
  }

  async getFutureOrderByTableNumber(tableNumber: number): Promise<Array<any>> {
    return this.orderModel.find({
      tableNumber: tableNumber,
      deliveryDate: { $gt: Date.now() },
    });
  }
}
