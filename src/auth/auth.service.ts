import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterDto } from '../auth/dto/registerUser.dto';
import bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async registerUser(registerUserDto: RegisterDto) {
    // console.log('registerUserDto: ', registerUserDto);
    const saltRounds = 10;
    const hash: string = await bcrypt.hash(
      registerUserDto.password,
      saltRounds,
    );
    /**
     * 1. Check email exist
     * 2. hash the password
     * 3. store user in DB
     * 4. Generate jwt token
     * 5. send token in response
     */
    const user = await this.userService.createUser({
      ...registerUserDto,
      password: hash,
    });
    // console.log('user', user);

    return { user };
  }
}
