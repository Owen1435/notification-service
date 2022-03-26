import { Injectable } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Order } from '../../../libs/domain/order-service/order';

@Injectable()
export class NotificationHandler {
  @RabbitSubscribe({
    exchange: 'order.created.exchange',
    routingKey: '',
    queue: 'order.created.queue.client-service',
  })
  async created(order: Order) {
    console.log(`Order ${order.id} was created !`);
  }
}
