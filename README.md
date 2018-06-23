# egg-api-mock

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/egg-api-mock.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-api-mock
[travis-image]: https://img.shields.io/travis/zinkey/egg-api-mock.svg?style=flat-square
[travis-url]: https://travis-ci.org/zinkey/egg-api-mock


An egg plugin for api mock, enabled under local development default.

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
  dir: 'mock', // default mock dir
  env: [ 'local' ], // enabled under local development default
  glob: '**/*.mock.js', // default glob
};
```
You can use koa-router like methods in `${dir}/${glob}`, default: `mock/**/*.mock.js`

Example: 

mock/1.mock.js
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

mock/2.mock.js
```js
module.exports = {
  "POST /api/post": (ctx) => {
    ctx.body = ctx.request.body;
  },
};
```

Then you can request you app:

```
/api/user/1 : 1
/api/user/2 : 2
/api/users : {success: true}
/api/post : post data
```


## License

[MIT](LICENSE)