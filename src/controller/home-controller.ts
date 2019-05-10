import HomeService from '../service/home-service';

export default class HomeController {
  static async hello(ctx) {
    ctx.body = await HomeService.hello();
  }
}
