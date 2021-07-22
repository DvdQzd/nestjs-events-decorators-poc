import { EventEmitter2 } from '@nestjs/event-emitter';
import { SomethingBaseDecorator } from './something-base.decorator';
import { SomethingDoneEvent } from '../../events/something.event';
import { SomethingInterface } from '../something.interface';

export class SomethingWithEvent extends SomethingBaseDecorator {
  constructor(
    something: SomethingInterface,
    private readonly eventEmitter: EventEmitter2,
  ) {
    super(something);
  }

  doSomething(payload: any): void {
    super.doSomething(payload);
    console.log(
      'Now sending event something.done for something with payload: ',
      payload,
    );
    this.eventEmitter.emit(
      'something.done',
      new SomethingDoneEvent({ payload }),
    );
  }
}
