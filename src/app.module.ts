import { Module } from '@nestjs/common';
import { RmqModule } from 'libs/common/rmq/rmq.module';
import { ConfigModule } from '@nestjs/config';
import { NotificationModule } from './modules/notification/notification.module';

@Module({
  imports: [ConfigModule.forRoot(), RmqModule, NotificationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
