"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcryptjs_1 = require("bcryptjs");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, configService, jwtService) {
        this.usersService = usersService;
        this.configService = configService;
        this.jwtService = jwtService;
    }
    async registerUser(userData) {
        const foundUser = await this.usersService.findUserByEmail(userData.email);
        if (foundUser)
            throw new common_1.BadRequestException('Email already exists');
        const hashedPassword = await (0, bcryptjs_1.hash)(userData.password, 8);
        userData.password = hashedPassword;
        await this.usersService.create(userData);
    }
    async loginUser(credentials) {
        const foundUser = await this.usersService.findUserByEmail(credentials.email);
        if (!foundUser)
            throw new common_1.UnauthorizedException('Invalid Credentials');
        const isPasswordValid = await (0, bcryptjs_1.compare)(credentials.password, foundUser.password);
        if (!isPasswordValid)
            throw new common_1.UnauthorizedException('Invalid Credentials');
        const token = await this.jwtService.signAsync({ id: foundUser.id });
        const refreshToken = await this.jwtService.signAsync({ id: foundUser.id }, {
            secret: this.configService.get('REFRESH_TOKEN_SECRET'),
            expiresIn: '7d',
        });
        await this.usersService.saveRefreshToken(foundUser.id, refreshToken);
        delete foundUser.refreshTokens;
        delete foundUser.password;
        return {
            user: foundUser,
            token,
            refreshToken,
        };
    }
    async logoutUser(refreshToken) {
        try {
            const { id } = await this.jwtService.verifyAsync(refreshToken, {
                secret: this.configService.get('REFRESH_TOKEN_SECRET'),
            });
            await this.usersService.deleteRefreshToken(id, refreshToken);
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException("Can't logout user");
        }
    }
    async refreshAccessToken(refreshToken) {
        try {
            const { id } = await this.jwtService.verifyAsync(refreshToken, {
                secret: this.configService.get('REFRESH_TOKEN_SECRET'),
            });
            const foundUser = await this.usersService.findUserById(id);
            const tokenExists = foundUser.refreshTokens.some((token) => token === refreshToken);
            if (!tokenExists)
                throw new Error();
            const newAccessToken = await this.jwtService.signAsync({
                id: foundUser.id,
            });
            const newRefreshToken = await this.jwtService.signAsync({ id: foundUser.id }, {
                secret: this.configService.get('REFRESH_TOKEN_SECRET'),
                expiresIn: '7d',
            });
            await this.usersService.deleteRefreshToken(foundUser.id, refreshToken);
            await this.usersService.saveRefreshToken(foundUser.id, newRefreshToken);
            return {
                token: newAccessToken,
                refreshToken: newRefreshToken,
            };
        }
        catch (error) {
            throw new common_1.ForbiddenException();
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        config_1.ConfigService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map