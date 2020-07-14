import HomeService from '../service/home-service';

class HomeController {
  _service:HomeService = new HomeService()

  hello =  async(ctx) => {
    ctx.body = await this._service.hello();
  }
}

export default new HomeController()