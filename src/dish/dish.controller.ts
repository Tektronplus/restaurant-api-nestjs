import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { DishService } from './dish.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/all')
  async getListCats(): Promise<Array<any>> {
    return this.dishService.getAllDishes();
  }

  @Post('/add')
  postBody(@Body() body: { name: string; price: number }): string {
    return this.dishService.addDish(body);
  }
}
