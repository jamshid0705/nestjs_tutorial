import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto.ts';

@Injectable()
export class UserService {
    users:UserDto[]
    constructor(){
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
        return this.users
    }

    async create(dto:UserDto){
        const data={
            id:new Date().getTime(),
            ...dto
        }
        console.log(Object.assign(this.users,data))
        return [...this.users]
    }

    async getById(id:string){
        return this.users.find(data=>data.id===Number(id))
    }

    async update(id:string,dto:UserDto){
        let data= this.users.find(data=>data.id===Number(id))
        data=dto
        return dto
    }

    async delete(id:string){
        return this.users.filter(data=>data.id!==Number(id))
    }
}
