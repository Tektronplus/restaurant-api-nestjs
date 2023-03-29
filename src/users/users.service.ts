import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  //Function to find user
  async findOne(username: string): Promise<any> {
    return await this.userModel.findOne({ username: username });
  }

  // Function to add new user
  addUser(newUser: { username: string; password: string }): string {
    const userCreated = new this.userModel(newUser);
    userCreated.save();
    return 'New user added!';
  }
}
