本人平常喜欢用`nodejs`瞎 JB 写写东西，但是每次都要创建项目、安装依赖等等前戏工作，这让我很烦。于是乎写了个空的起手式，这样以后写东西直接 clone 下来就行了。

# ts-koa-starter

这是一个`koa+typescript`的起手式(简单的空环境)，默认使用`koa2`、`typescript`、`typeorm`。

如果你不想要`typeorm`，请点击[这里](https://github.com/Vibing/ts-koa-starter/tree/br-ts-koa)

我觉得跟我一样的人应该很多，所以也把这个小东西分享给大家。

## 项目依赖

- Koa2 [Koa (koajs) -- 基于 Node.js 平台的下一代 web 开发框架 \| Koajs 中文文档](https://koa.bootcss.com/)
- Typescript [TypeScript 中文网 · TypeScript——JavaScript 的超集](https://www.tslang.cn/)
- Typeorm [一个基于 typescript 的数据库 ORM 非常好用](https://typeorm.io/#/)

## 项目结构

```js
.
├── src
│   ├── controller      //controller层
│   ├── entity          //entity实例
│   ├── service         //service层
│   ├── routes.ts       //路由
│   └── index.ts        //项目入口index.js
├── ecosystem.config.js //pm2配置
├── nodemon.json        //nodemon配置
├── ormconfig.js        //typeorm连接数据库配置
├── package.json
└── tsconfig.json
```

## 使用

- git clone https://github.com/Vibing/ts-koa-starter.git
- yarn 或者 npm i
- yarn start 或 npm start

### 打包

- yarn build 或 npm run build

### 生产环境启动

- 生产环境使用 pm2 启动 可以达到负载均衡 执行：yarn pro 或 npm run pro
