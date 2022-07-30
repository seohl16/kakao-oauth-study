import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-kakao";
import * as config from 'config';
import { AuthKakaoDto } from "./dto/auth.kakao-dto";
import { AuthService } from "./auth.service";

@Injectable()
export class StrategyKakao extends PassportStrategy(Strategy, 'kakao') {
	constructor(public readonly authService: AuthService) {
		super({
			clientID: config.get('kakao.clientId'),
			callbackURL: config.get('kakao.callbackURL'),
		});
	}

	async validate(accessToken: string, refreshToken: string, profile, done) {
		const user: AuthKakaoDto = await (this.authService.getUserMe(accessToken));
		console.log(user);
		console.log("accesstoken", accessToken);
		done(null, user);
	}
}