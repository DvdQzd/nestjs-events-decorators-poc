import { SomethingBaseDecorator } from './something-base.decorator';

export class SomethingElse extends SomethingBaseDecorator {
  doSomething(payload: any): void {
    super.doSomething(payload);
    console.log('\nNow doing something else with payload: ', payload);
  }
}
