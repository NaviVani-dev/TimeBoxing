import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
        start_time: string;
        end_time: string;
        status: number;
    }[]>;
    createUser(data: {
        name: string;
        email: string;
        password: string;
        start_time: string;
        end_time: string;
        status: number;
    }): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
        start_time: string;
        end_time: string;
        status: number;
    }>;
}
