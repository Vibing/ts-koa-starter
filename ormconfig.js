const env = process.env.NODE_ENV;

module.exports = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: [`${env == 'dev' ? 'src' : 'dist'}/entity/*{.ts,.js}`]
};
