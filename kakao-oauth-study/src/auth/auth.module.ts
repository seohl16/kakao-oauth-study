import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { StrategyKakao } from './kakao.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, StrategyKakao]
})
export class AuthModule {}
