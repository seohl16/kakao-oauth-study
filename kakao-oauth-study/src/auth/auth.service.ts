import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AuthKakaoDto } from './dto/auth.kakao-dto';

@Injectable()
export class AuthService {
	constructor(private readonly httpService: HttpService) {}
	
	async getUserMe(accessToken: string) : Promise < AuthKakaoDto > {
		let user: AuthKakaoDto;
		await axios({
			method: 'get',
			url: 'https://kapi.kakao.com/v2/user/me',
			headers: {
				'Authorization': `Bearer ${accessToken}`,
				'Content-Type': 'application/json'
			}
		})
		.then((res) => {
			// 유효한 토큰은 사용자 정보를 돌려준다. 
			console.log('good');
			user = {
				name: res.data.kakao_account.profile.nickname, 
				kakaoid: res.data.id, 
			};
			return user;
		})
		.catch((err) => {
			// 유효하지 않은 토큰은 401에러를 돌려준다. 
			console.log(err);
		})
		return user;
	}
	
}
