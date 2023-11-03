import { Controller ,Get, HttpCode} from '@nestjs/common';

@Controller('user')
export class UserController {
    @HttpCode(200)
    @Get()
    async getAll(){
        return 
    }
}
