'use strict';

module.exports = {
  "POST/api/posttest1": (ctx) => {
    ctx.body = ctx.request.body;
  },
  "POST /api/posttest2": {
    success: true,
  },
};

