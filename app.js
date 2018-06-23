'use strict';

module.exports = app => {
  const { apiMock, env } = app.config;
  if (!apiMock.env.includes(env)) {
    return;
  }
  const index = app.config.coreMiddleware.indexOf('bodyParser');
  app.config.coreMiddleware.splice(index + 1, 0, 'mock');
};
