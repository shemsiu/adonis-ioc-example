import { IocContract } from '@adonisjs/fold'
import GreetingService from 'App/Services/GreetingService'

export default class AppProvider {
  constructor (protected $container: IocContract) {
  }

  public register () {
    // Register your own bindings
    this.$container.singleton('MyProject/GreetingService', () => new GreetingService())
  }

  public boot () {
    // IoC container is ready
  }

  public shutdown () {
    // Cleanup, since app is going down
  }

  public ready () {
    // App is ready
  }
}
