import { Controller ,Get, HttpCode} from '@nestjs/common';
import { UserDto } from './dto/user.dto.ts';

@Controller('user')
export class UserController {
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

    @HttpCode(200)
    @Get()
    async getAll(){
        return this.users
    }
}
