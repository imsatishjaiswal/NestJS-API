import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth') //API endpoint is /auth/register
export class AuthController {
  // authService: AuthService;
  constructor(private readonly authService: AuthService) {
    this.authService = authService;
  }
  @Post('register')
  register() {
    //Write logic here
    const result = this.authService.registerUser();
    return result;
  }
}
