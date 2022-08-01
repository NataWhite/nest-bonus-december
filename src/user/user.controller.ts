import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {AuthGuard} from "../auth/jwt-aith.guard";
import {CustomOkResponse} from "../core/swagger/swagger.helper";
import {
    SWAGGER_EXAMPLE_CREATE_USER,
    SWAGGER_EXAMPLE_GET_ALL_USERS
} from "../core/swagger/example/swagger-example-user.list";

@ApiTag('User')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @CustomOkResponse({ exampleData: SWAGGER_EXAMPLE_GET_ALL_USERS })
    @UseGuards(AuthGuard)
    getAllUsers() {
        return this.userService.getAll();
    }

    @Get('/:id')
    @ApiQuery({ name: 'id', type: 'string'})
    // @ApiQuery({ name: 'userId/', type: 'string'})
    // @ApiQuery({ name: 'postId', type: 'string'})
    @UseGuards(AuthGuard)
    getOneUser(@Param() param: any ) {
        const { id } = param;
        return this.userService.getOneUserById(id)
    }

    @Post()
    @ApiBody({ type: CreateUserDto})
    @CustomOkResponse({ exampleData: SWAGGER_EXAMPLE_CREATE_USER })
    // @ApiOkResponse({
    //     status: 200,
    //     schema: {
    //         example: {
    //             id: 1,
    //             username: "Vadym",
    //             email: "vadym@gmail",
    //             age: 20,
    //             status: false,
    //             password: "qwerty123",
    //             created_at: "2022-07-31T09:35:54.845Z"
    //         }
    //     }
    // })
    @UseGuards(AuthGuard)
    createUser(@Body() user: CreateUserDto) {
        return this.userService.createUser(user)
    }


    // @Delete('/:id')
    // @Patch('/:id')
}
