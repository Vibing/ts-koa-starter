import { Context } from 'koa';

export default class HomeService {
  static hello(context?: Context) {
    return new Promise(resolve => {
      resolve('hello world');
    });
  }
}
