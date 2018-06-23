'use strict';

module.exports = {
  "/api/user/:id": (ctx) => {
    ctx.body = ctx.params.id;
  },
  "/api/users": {
    success: true
  },
};

