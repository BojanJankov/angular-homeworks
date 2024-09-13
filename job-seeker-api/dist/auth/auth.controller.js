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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const credentials_dto_1 = require("./dtos/credentials.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    registerUser(userData) {
        return this.authService.registerUser(userData);
    }
    async loginUser(credentials, response) {
        const { token, refreshToken, user } = await this.authService.loginUser(credentials);
        response.set('access-control-expose-headers', '*');
        response.set('access-token', token);
        response.set('refresh-token', refreshToken);
        return response.json(user);
    }
    logoutUser(refreshToken) {
        console.log(refreshToken);
        return this.authService.logoutUser(refreshToken);
    }
    async refreshAccessToken(response, refreshToken) {
        const { token, refreshToken: newRefreshToken } = await this.authService.refreshAccessToken(refreshToken);
        response.set('access-control-expose-headers', '*');
        response.set('access-token', token);
        response.set('refresh-token', newRefreshToken);
        response.sendStatus(common_1.HttpStatus.NO_CONTENT);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [credentials_dto_1.CredentialsDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginUser", null);
__decorate([
    (0, common_1.Get)('logout'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Headers)('refresh-token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logoutUser", null);
__decorate([
    (0, common_1.Get)('refresh-token'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Headers)('refresh-token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshAccessToken", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map