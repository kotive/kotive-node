import assert from 'assert';
import {Client} from '../lib';
//import nock from 'nock';

describe('clients', () => {
  it('should be constructed', () => {
    const client = new Client('foo', 'bar');
    assert.equal('foo', client.username);
    assert.equal('bar', client.password);
  });
  it('enable promises', () => {
    const client = new Client('foo', 'bar').usePromises();
    assert.equal(true, client.promises);
  });
  // it('ping', done => {
  //   nock('https://api.intercom.io').get('/admins').reply(200, {});
  //   const client = new Client('foo', 'bar');
  //   client.ping(r => {
  //     assert.equal(200, r);
  //     done();
  //   });
  // });
  // it('paginate', done => {
  //   nock('https://api.intercom.io').get('/foo/bar/baz').query({ blue: 'red' }).reply(200, { foo: 'bar' });
  //   const client = new Client('foo', 'bar').usePromises();
  //   const paginationObject = { next: 'https://api.intercom.io/foo/bar/baz?blue=red' };
  //   client.nextPage(paginationObject).then(r => {
  //     assert.deepEqual({foo: 'bar'}, r.body);
  //     done();
  //   });
  // });
  // it('should compute user hashes', () => {
  //   assert.equal('c8acc43edc084edb8207a50320ba4ec5d113686cf8050274a305480c98512e45', SecureMode.userHash({secretKey: 'bar', identifier: 'baz'}));
  // });
});
