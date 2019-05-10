import { Context } from 'koa';
import { getManager } from 'typeorm';
import Category from '../entity/category';

export default class HomeService {
  static async hello(context?: Context) {
    const categoryRepository = getManager().getRepository(Category);
    const newCategory = categoryRepository.create({
      name: 'Jack'
    });

    await categoryRepository.save(newCategory);

    return 'hello world';
  }
}
