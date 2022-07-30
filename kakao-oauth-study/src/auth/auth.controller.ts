import { Controller, Get, HttpCode, HttpStatus, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Get('/kakao')
	@HttpCode(200)
	@UseGuards(AuthGuard('kakao'))
	async kakaoLogin() {
		return HttpStatus.OK;
	}

	@Get('/kakao/redirect')
	@HttpCode(200)
	@UseGuards(AuthGuard('kakao'))
	async kakaoLoginCallback(@Req() req, @Res() res) {
		console.log(req.user, req.query);
		console.log('finish');
		res.redirect('http://localhost:3000')
	}
}
