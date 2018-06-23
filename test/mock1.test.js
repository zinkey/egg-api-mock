'use strict';

const mock = require('egg-mock');

describe('test/mock1.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/demo',
    });
    return app.ready();
  });
  after(() => app.close());
  afterEach(mock.restore);

  it('should return router', () => {
    return app.httpRequest()
      .get('/')
      .expect('hello world')
      .expect(200);
  });

  it('should return get params 1', () => {
    return app.httpRequest()
      .get('/api/user/1')
      .expect('1')
      .expect(200);
  });

  it('should return get params 2', () => {
    return app.httpRequest()
      .get('/api/user/2')
      .expect('2')
      .expect(200);
  });

  it('should return get json', () => {
    return app.httpRequest()
      .get('/api/users')
      .expect({ success: true })
      .expect(200);
  });
});
