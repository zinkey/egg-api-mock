'use strict';

const list = [];

module.exports = {
  "/api/list": list,
  "POST /api/list/add": (ctx) => {
    list.push(1);
    ctx.body = '';
  },
  "DELETE /api/list/delete": (ctx) => {
    list.pop();
    ctx.body = '';
  },
};

