import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventListener } from './listener/something-done.listener';
import { SomethingController } from './controller/something.controller';
import { SomethingService } from './service/something.service';

@Module({
  imports: [EventEmitterModule.forRoot({ wildcard: true })],
  controllers: [SomethingController],
  providers: [SomethingService, EventListener],
})
export class AppModule {}
