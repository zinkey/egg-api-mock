'use strict';

const mock = require('egg-mock');

describe('test/mock3.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/demo',
    });
    return app.ready();
  });
  after(() => app.close());
  afterEach(mock.restore);

  it('should return status 500', () => {
    return app.httpRequest()
      .get('/api/status')
      .expect(500, 'error')
  });

});
