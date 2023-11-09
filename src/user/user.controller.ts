import { Controller ,Get, HttpCode,Post,Body ,Patch,Delete, ValidationPipe} from '@nestjs/common';
import { UserDto } from './dto/user.dto.ts';
import { Param, UsePipes } from '@nestjs/common/decorators/index.js';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @HttpCode(200)
    @Get()
    async getAll(){
        return this.userService.getAll()
    }

    @HttpCode(201)
    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() dto:UserDto){
       return this.userService.create(dto)
    }

    @HttpCode(200)
    @Get(':id')
    async getById(@Param('id') id:string){
        return this.userService.getById(id)
    }

    @HttpCode(201)
    @Patch(":id")
    async update(@Param('id') id:string,@Body() dto:UserDto){
       return this.userService.update(id,dto)
    }

    @HttpCode(200)
    @Delete(":id")
    async delete(@Param('id') id:string){
        return this.userService.delete(id)
    }
}
