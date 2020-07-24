import { GreetingInterface } from '@ioc:MyProject/GreetingService'

export default class GreetingService implements GreetingInterface {
  public sayHello (name: string): void {
    console.log(`Hi ${name}`)
  }

  public sayGoodbye (name: string): void {
    console.log(`Goodbye ${name}`)
  }
}
