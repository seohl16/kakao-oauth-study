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
		const data = await (this.authService.tokenValidation(accessToken));
		console.log("accesstoken", accessToken);
		const payload: AuthKakaoDto = {
			name: profile._json.kakao_account.profile.nickname,
			kakaoid: profile._json.id,
		};
		done(null, payload);
	}
}