import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AuthService {
	constructor(private readonly httpService: HttpService) {}
	
	async tokenValidation(accessToken: string) {
		await axios({
			method: 'get',
			url: 'https://kapi.kakao.com/v2/user/me',
			headers: {
				'Authorization': `Bearer ${accessToken}`,
				'Content-Type': 'application/json'
			}
		})
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			console.log(err);
		})
		
	}
	
}
