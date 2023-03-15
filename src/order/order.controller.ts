import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/tableNumber/:tableNumber')
  async getOrderByTableNumber(@Param() param): Promise<Array<any>> {
    return this.orderService.getOrderByTableNumber(param.tableNumber);
  }

  @Get('/future/tableNumber/:tableNumber/')
  async getFutureOrderByTableNumber(@Param() param): Promise<Array<any>> {
    return this.orderService.getFutureOrderByTableNumber(param.tableNumber);
  }

  @Post('/add')
  postBody(
    @Body()
    body: {
      dishesList: Array<{ name: string; price: number }>;
      tableNumber: number;
      deliveryDate: string;
    },
  ): string {
    return this.orderService.addOrder(body);
  }
}
