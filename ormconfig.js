const env = process.env.NODE_ENV;

module.exports = {
  type: 'mysql',
  host: '47.110.130.242',
  port: 3306,
  username: 'vcontroller',
  password: 'te85jRPErW6JiNke',
  database: 'vcontroller',
  synchronize: true,
  logging: false,
  entities: [`${env == 'dev' ? 'src' : 'dist'}/entity/*{.ts,.js}`]
};
