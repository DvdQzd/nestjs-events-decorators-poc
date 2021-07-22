import { SomethingInterface } from '../something.interface';

export class SomethingBaseDecorator implements SomethingInterface {
  constructor(private readonly something: SomethingInterface) {}

  doSomething(payload: any): void {
    console.log('# Using decorator #');
    return this.something.doSomething(payload);
  }
}
