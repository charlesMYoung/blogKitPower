import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { TagDAO } from './tag.dao';

@Module({
  imports: [],
  controllers: [TagController],
  providers: [TagService, TagDAO],
})
export class TagModule {}
