import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAllUsers() {
        return this.userService.getAll();
    }

    @Get('/:id')
    getOneUser(@Param() param: any ) {
        const { id } = param;
        return this.userService.getOneUserById(id)
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        return this.userService.createUser(user)
    }


    // @Delete('/:id')
    // @Patch('/:id')
}
