import { Injectable } from '@nestjs/common';
import { SomethingInterface } from './something.interface';

@Injectable()
export class SomethingService implements SomethingInterface {
  doSomething(payload: any): void {
    console.log('\nDoing something with...', { payload });
  }
}
