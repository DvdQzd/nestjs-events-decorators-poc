import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { SomethingDoneEvent } from '../events/something.event';

@Injectable()
export class EventListener {
  @OnEvent('*.notDone')
  handleSomethingDoneEvent(event: SomethingDoneEvent): void {
    console.log('\nSomething has been done so Im gonna handle it:');
    console.log('Data to handle: ', event);
  }
}
