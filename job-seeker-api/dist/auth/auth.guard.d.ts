import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export declare class AuthGuard implements CanActivate {
    private jwtService;
    private configService;
    private usersService;
    constructor(jwtService: JwtService, configService: ConfigService, usersService: UsersService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractToken;
}
