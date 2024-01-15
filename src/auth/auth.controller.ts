import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signup(@Body() signupDto: SignUpDto): Promise<{ token: string }> {
    console.log('signup', signupDto);
    return this.authService.signUp(signupDto);
  }
}
