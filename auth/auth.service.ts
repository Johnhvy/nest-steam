/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

import { SignupUserDto } from './dto/signup.dto';
import { RegistrationStatus } from './interfaces/register-status-interface';
import { LoginStatus } from './interfaces/login-status-interface';
import { LoginUserDto } from './dto/login.dto';
import mongoose, { Model } from 'mongoose';
import { User } from './schemas/user.schema';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  //register function
  async register(signDto: SignupUserDto): Promise<RegistrationStatus> {
    console.log(signDto);
    
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered',
    };
    const createdUser = new this.userModel({
      _id: new mongoose.Types.ObjectId(),
      userId: signDto.userId,
      email: signDto.email,
      password: signDto.password
    });
    console.log(createdUser);
    
    try {
      await createdUser.save()
    } catch (err) {
      status = {
        success: false,
        message: err,
      };
    }
    return status;
  }
  
  //login function
  async login(loginDto: LoginUserDto): Promise<LoginStatus> {
    console.log(loginDto);
    try {
      const user:any = await this.validateUser(loginDto);
      return{ userId: user, message:'login successfully.'}
    } catch (error) {
      throw { message: error.message, statusCode: error.statusCode };
    }
  }

  async validateUser(loginUserDto: LoginUserDto) {
    const user = await this.userModel.findOne({userId: loginUserDto.userId});
    if (!user) {
      throw { message: 'User not found', statusCode: 404 }; // User not found
    }

    if (user.password === loginUserDto.password) {
      return { user: user.userId}; // Authentication successful
    } else {
      throw { message: 'Incorrect password', statusCode: 401 }; // Password does not match
    }
  }
}
