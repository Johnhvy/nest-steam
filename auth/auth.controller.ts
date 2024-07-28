/* eslint-disable prettier/prettier */
import {
  Controller,
  Body,
  Post,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import { SignupUserDto } from './dto/signup.dto';
import { RegistrationStatus } from './interfaces/register-status-interface';
import { AuthService } from './auth.service';
import { LoginStatus } from './interfaces/login-status-interface';
import { LoginUserDto } from './dto/login.dto';
import { JwtPayload } from './interfaces/payload-interface';
import { AuthGuard } from '@nestjs/passport';

//the controller for managing auth
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //register controller
  @Post('register')
  public async register(
    @Body() SignupUserData: SignupUserDto,
  ): Promise<RegistrationStatus> {
    const result: RegistrationStatus = await this.authService.register(
      SignupUserData,
    );

    if (!result.success) {
      console.log('Can not register user');
    }
    return result;
  }

  //login controller
  @Post('login')
  public async login(@Body() loginUserDto: LoginUserDto): Promise<LoginStatus> {
    return await this.authService.login(loginUserDto);
  }

  @Get('whoami')
  @UseGuards(AuthGuard())
  public async testAuth(@Req() req: any): Promise<JwtPayload> {
    return req.user;
  }
}
