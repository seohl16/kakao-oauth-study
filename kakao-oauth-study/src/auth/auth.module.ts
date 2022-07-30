import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { StrategyKakao } from './kakao.strategy';

@Module({
  imports: [
    HttpModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, StrategyKakao]
})
export class AuthModule {}
