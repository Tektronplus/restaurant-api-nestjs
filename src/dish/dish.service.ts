import { Injectable } from '@nestjs/common';
import { Dish, DishDocument } from './dish.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DishService {
  constructor(@InjectModel(Dish.name) private dishModel: Model<DishDocument>) {}

  //Endpoint to get all dishes availables
  async getAllDishes(): Promise<Array<any>> {
    return this.dishModel.find();
  }

  //Endpoint to add new dish
  addDish(newDish: { name: string; price: number }): string {
    const dishCreated = new this.dishModel(newDish);
    dishCreated.save();
    return 'New dish added';
  }
}
