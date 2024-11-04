import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllUsers(): Promise<User[]>;
    createUser(data: {
        name: string;
        email: string;
        password: string;
        start_time: string;
        end_time: string;
        status: number;
    }): Promise<User>;
}
