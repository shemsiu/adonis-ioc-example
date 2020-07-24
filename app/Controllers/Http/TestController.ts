import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import GreetingService from '@ioc:MyProject/GreetingService'

export default class TestController {
  public async index ({ response }: HttpContextContract) {
    GreetingService.sayHello('Bob')

    // more code ....
    return response.ok({
      data: {},
    })
  }
}
