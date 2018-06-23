'use strict';

const path = require('path');
const debounce = require('debounce');


module.exports = agent => {
  const logger = agent.logger;
  const baseDir = agent.config.baseDir;
  const config = agent.config.apiMock;
  const watchDir = path.resolve(baseDir, config.dir);

  agent.watcher.watch(watchDir, debounce(reloadWorker, 200));

  function reloadWorker(info) {

    logger.warn(`[agent:apiMock] reload worker because ${info.path} ${info.event}`);

    process.send({
      to: 'master',
      action: 'reload-worker',
    });
  }
};
