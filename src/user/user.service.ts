import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto.ts';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema.js';
import { Model } from 'mongoose';
import { throwError } from 'rxjs';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private UserModel:Model<User>){
    }
    async getAll(){
        return this.UserModel.find({})
    }

    async create(dto:UserDto){
        // console.log(dto.email)
        const a=await this.UserModel.find({})
        for(let val of a){
            if(dto.email===val.email){
              return {message:'Email mustr unique'}
            }
        }
        return this.UserModel.create(dto)
    }

    async getById(id:string){
        return this.UserModel.findById(id)
    }

    async update(id:string,dto:UserDto){
        return this.UserModel.findByIdAndUpdate(id, dto, {new:true} )
    }

    async delete(id:string){
        return this.UserModel.findByIdAndDelete(id)
    }
}
