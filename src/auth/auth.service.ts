/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<User | null> {
    const user = await this.userService.findByUsername(username);
    if (user !== null) {
      if (pass === user.password) return user;
    }
    return null;
  }

  login(user) {
    const payload = {
      email: user?.email,
      name: user?.prenom,
      role: user?.role,
      _id: user?._id,
      sub: user?._id,
    };
    return {
      data: {
        token: this.jwtService.sign(payload),
        id: user?._id,
      },
      statusCode: 200,
    };
  }
}
