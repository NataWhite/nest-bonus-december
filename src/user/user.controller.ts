import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {AuthGuard} from "../auth/jwt-aith.guard";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @UseGuards(AuthGuard)
    getAllUsers() {
        return this.userService.getAll();
    }

    @Get('/:id')
    @UseGuards(AuthGuard)
    getOneUser(@Param() param: any ) {
        const { id } = param;
        return this.userService.getOneUserById(id)
    }

    @Post()
    @UseGuards(AuthGuard)
    createUser(@Body() user: CreateUserDto) {
        return this.userService.createUser(user)
    }


    // @Delete('/:id')
    // @Patch('/:id')
}
