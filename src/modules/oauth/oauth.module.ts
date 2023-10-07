import { Module } from '@nestjs/common';
import { OAuthService } from './oauth.service';

@Module({
  providers: [OAuthService],
})
export class OAuthModule {}
