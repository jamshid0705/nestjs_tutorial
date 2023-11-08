import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto.ts';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema.js';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    users:UserDto[]
    constructor(@InjectModel(User.name) private UserModel:Model<User>){
        this.users=[
            {
                id:0,
                title:'Nestjs',
                description:"Nestjs full course from 0 to hero",
                excerpt:'Nestjs full course'
            },
            {
                id:1,
                title:'Nextjs',
                description:"Nextjs full course from 0 to hero",
                excerpt:'Nextjs full course'
            },
            {
                id:2,
                title:'Nuxtjs',
                description:"Nuxtjs full course from 0 to hero",
                excerpt:'Nuxtjs full course'
            }
        ]
    }
    async getAll(){
        return this.UserModel.find({})
    }

    async create(dto:UserDto){
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
