import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  registerUser() {
    /**
     * 1. Check email exist
     * 2. hash the password
     * 3. store user in DB
     * 4. Generate jwt token
     * 5. send token in response
     */
    return { message: 'Register Success!!' };
  }
}
