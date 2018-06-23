'use strict';

const mock = require('egg-mock');

describe('test/mock2.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/demo',
    });
    return app.ready();
  });
  after(() => app.close());
  afterEach(mock.restore);

  it('should return post ctx.request.body', () => {
    return app.httpRequest()
      .post('/api/posttest1')
      .send({ name: 'john' })
      .expect({ name: 'john' })
      .expect(200);
  });

  it('should return post json', () => {
    return app.httpRequest()
      .post('/api/posttest2')
      .expect({ success: true })
      .expect(200);
  });

});
