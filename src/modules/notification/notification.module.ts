import { Module } from '@nestjs/common';
import { NotificationHandler } from './notification.handler';

@Module({
  imports: [],
  providers: [NotificationHandler],
})
export class NotificationModule {}
