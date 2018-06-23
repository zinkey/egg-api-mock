'use strict';

const path = require('path');
const debounce = require('debounce');


module.exports = agent => {
  const { baseDir, apiMock, env } = agent.config;
  if (!apiMock.env.includes(env)) {
    return;
  }
  const logger = agent.logger;
  const watchDir = path.resolve(baseDir, apiMock.dir);

  agent.watcher.watch(watchDir, debounce(reloadWorker, 200));

  function reloadWorker(info) {

    logger.warn(`[agent:egg-api-mock] reload worker because ${info.path} ${info.event}`);

    process.send({
      to: 'master',
      action: 'reload-worker',
    });
  }
};
