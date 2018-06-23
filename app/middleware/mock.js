'use strict';

const { join, resolve } = require('path');
const glob = require('glob');
const Router = require('koa-router');
const assert = require('assert');

const VALID_METHODS = [ 'all', 'get', 'post', 'put', 'patch', 'delete', 'del' ];

function parseKey(key) {
  let method = 'all';
  let path = key;
  if (key.indexOf(' ') > -1) {
    const splited = key.split(' ');
    method = splited[0].toLowerCase();
    path = splited[1];
  }
  assert(
    VALID_METHODS.includes(method),
    `Invalid method ${method} for path ${path}, please check your mock files.`
  );
  return {
    method,
    path,
  };
}

module.exports = (options, app) => {
  const logger = app.logger;
  const { baseDir, apiMock } = app.config;
  const absMockPath = resolve(baseDir, apiMock.dir);

  logger.info(`[egg-api-mock] dir: ${absMockPath}`);

  const mockFiles = glob.sync('**/*.mock.js', {
    cwd: absMockPath,
  });

  const router = new Router();

  mockFiles.forEach(file => {
    const obj = require(join(absMockPath, file));
    for (const key in obj) {
      const { method, path } = parseKey(key);
      router[method](path, (ctx, next) => {
        logger.info(`[egg-api-mock] mock: ${ctx.url} ${method} ${path}`);
        if (typeof obj[key] === 'function') {
          obj[key](ctx, next);
        } else {
          ctx.body = obj[key];
        }
      });
    }
  });

  return router.routes();
};
