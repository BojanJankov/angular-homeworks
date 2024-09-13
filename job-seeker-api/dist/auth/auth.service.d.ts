import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { CredentialsDto } from './dtos/credentials.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private configService;
    private jwtService;
    constructor(usersService: UsersService, configService: ConfigService, jwtService: JwtService);
    registerUser(userData: CreateUserDto): Promise<void>;
    loginUser(credentials: CredentialsDto): Promise<{
        user: import("../users/entities/user.entity").User;
        token: string;
        refreshToken: string;
    }>;
    logoutUser(refreshToken: string): Promise<void>;
    refreshAccessToken(refreshToken: string): Promise<{
        token: string;
        refreshToken: string;
    }>;
}
