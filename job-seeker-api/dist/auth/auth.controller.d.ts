import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { CredentialsDto } from './dtos/credentials.dto';
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerUser(userData: CreateUserDto): Promise<void>;
    loginUser(credentials: CredentialsDto, response: Response): Promise<Response<any, Record<string, any>>>;
    logoutUser(refreshToken: string): Promise<void>;
    refreshAccessToken(response: Response, refreshToken: string): Promise<void>;
}
