'use strict';

const mock = require('egg-mock');

describe('test/mock4.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/demo',
    });
    return app.ready();
  });
  after(() => app.close());
  afterEach(mock.restore);

  it('should return list length 1', () => {
    return app.httpRequest()
      .get('/api/list')
      .expect(200, []);
  });

  it('should return list length', () => {
    return app.httpRequest()
      .post('/api/list/add')
      .expect(200);
  });

  it('should add list', () => {
    return app.httpRequest()
      .get('/api/list')
      .expect(200, [ 1 ]);
  });

  it('should delete list', () => {
    return app.httpRequest()
      .del('/api/list/delete')
      .expect(200);
  });

  it('should return list length 2', () => {
    return app.httpRequest()
      .get('/api/list')
      .expect(200, []);
  });

});
