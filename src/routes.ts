import HomeController from './controller/home-controller';

export default [
  {
    path: '/',
    method: 'get',
    action: HomeController.hello
  }
];
