import { Body, Controller, Get, Post } from '@nestjs/common';
import { DishService } from './dish.service';

@Controller('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Get('/all')
  async getListCats(): Promise<Array<any>> {
    return this.dishService.getAllDishes();
  }

  @Post('/add')
  postBody(@Body() body: { name: string; price: number }): string {
    return this.dishService.addDish(body);
  }
}
