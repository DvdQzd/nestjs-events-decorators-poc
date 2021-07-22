import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { SomethingWithEvent } from '../service/decorators/something-with-event.decorator';
import { SomethingElse } from '../service/decorators/something-else.decorator';
import { SomethingService } from '../service/something.service';

@Controller('do')
export class SomethingController {
  constructor(
    private readonly somethingService: SomethingService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  @HttpCode(200)
  @Post('/something')
  somethingDefault(@Body() payload: any): void {
    console.clear();
    this.somethingService.doSomething(payload);
  }

  @HttpCode(200)
  @Post('/something/else')
  somethingElse(@Body() payload: any): void {
    console.clear();
    new SomethingElse(this.somethingService).doSomething(payload);
  }

  @HttpCode(200)
  @Post('/something/event')
  somethingUpdateWithAudit(@Body() payload: any): void {
    console.clear();
    new SomethingWithEvent(
      this.somethingService,
      this.eventEmitter,
    ).doSomething(payload);
  }

  @HttpCode(200)
  @Post('/something/event/else')
  somethingEventElse(@Body() payload: any): void {
    console.clear();
    const somethingWithEvent = new SomethingWithEvent(
      this.somethingService,
      this.eventEmitter,
    );
    new SomethingElse(somethingWithEvent).doSomething(payload);
  }

  @HttpCode(200)
  @Post('/something/else/event')
  somethingElseEvent(@Body() payload: any): void {
    console.clear();
    const somethingElse = new SomethingElse(this.somethingService);
    new SomethingWithEvent(somethingElse, this.eventEmitter).doSomething(
      payload,
    );
  }
}
