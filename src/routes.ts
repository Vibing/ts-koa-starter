import homeController from './controller/home-controller';

export default [
  {
    path: '/',
    method: 'get',
    action: homeController.hello
  }
];
