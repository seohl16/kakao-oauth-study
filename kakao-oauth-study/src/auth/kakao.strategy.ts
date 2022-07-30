import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-kakao";
import * as config from 'config';
import { AuthKakaoDto } from "./dto/auth.kakao-dto";

@Injectable()
export class StrategyKakao extends PassportStrategy(Strategy, 'kakao') {
	constructor() {
		super({
			clientID: config.get('kakao.clientId'),
			callbackURL: config.get('kakao.callbackURL'),
		});
	}

	async validate(accessToken: string, refreshToken: string, profile, done) {
		console.log(accessToken);
		const profilejson = profile._json
		const kakao_account = profilejson.kakao_account;
		const payload: AuthKakaoDto = {
			name: profile._json.kakao_account.profile.nickname,
			kakaoid: profile._json.id,
		};
		done(null, payload);
	}
}