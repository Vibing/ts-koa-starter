import HomeService from '../service/home-service';

class HomeController {
  private service: HomeService = new HomeService();

  hello = async ctx => {
    ctx.body = await this.service.hello();
  };
}

export default new HomeController();
