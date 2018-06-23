'use strict';

module.exports = app => {
  const index = app.config.coreMiddleware.indexOf('bodyParser');
  app.config.coreMiddleware.splice(index + 1, 0, 'mock');
};
