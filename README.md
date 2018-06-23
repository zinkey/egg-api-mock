# egg-api-mock

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/egg-api-mock.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-api-mock
[travis-image]: https://img.shields.io/travis/eggjs/egg-api-mock.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-api-mock


egg plugin api mock

## Install

```bash
$ npm i egg-api-mock --save
```

## Usage

Add `egg-api-mock` as plugin

```js
// {app_root}/config/plugin.js
exports.apiMock = {
  enable: true,
  package: 'egg-api-mock',
};
```

Configuration

```js
// {app_root}/config/config.default.js
exports.apiMock = {
  dir: 'mock', // default
};
```
You can use koa-router like methods in ${dir}/*.mock.js

Example: 

1.mock.js
```js
module.exports = {
  "/api/user/:id": (ctx) => {
    ctx.body = ctx.params.id;
  },
  "/api/users": {
    success: true
  },
};
```

2.mock.js
```js
module.exports = {
  "/api/posttest": (ctx) => {
    ctx.body = ctx.request.body;
  },
};
```

Then you can request you app:

```
/api/user/1 : 1
/api/user/2 : 2
/api/users : {success: true}
/api/posttest : post data
```


## License

[MIT](LICENSE)