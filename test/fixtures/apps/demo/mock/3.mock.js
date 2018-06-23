'use strict';

module.exports = {
  "/api/status": (ctx) => {
    ctx.status = 500;
    ctx.body = 'error';
  },
};

