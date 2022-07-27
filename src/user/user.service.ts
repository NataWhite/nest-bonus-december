import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {PrismaService} from "../core/prisma.service";
import {Prisma, User } from '@prisma/client';
import {UpdateUserDto} from "./dto/update-user.dto";

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) {
    }

    getAll(): Promise<User[]> {
        return this.prismaService.user.findMany();
    }

    getOneUserById(userId: string): Promise<User> {
        // Number(id) -> convert string in in number
        return this.prismaService.user.findUnique({
            where: { id: Number(userId) },
            // select: {
            //     email: true,
            //     username: true
            // }
            // include: { posts: true }
        })
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prismaService.user.create({
            data,
        });
    }


    updateUser(data: UpdateUserDto, userId: string) {
        return  this.prismaService.user.update({
            where: { id: Number(userId)},
            data: {
                username: data.userName,
                age: data.age,
                status: data.status
            }
        })
    }

    // deleteUser(id: string)

}
