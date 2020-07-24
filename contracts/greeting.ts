declare module '@ioc:MyProject/GreetingService' {
  export interface GreetingInterface {
    sayHello(name: string): void
    sayGoodbye(name: string): void
  }

  const GreetingService: GreetingInterface
  export default GreetingService
}
