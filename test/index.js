import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('clients', () => {
  it('should be constructed', () => {
    const client = new Client('foo', 'bar');
    assert.equal('foo', client.user);
    assert.equal('bar', client.pass);
  });
  it('ping', done => {
    nock('https://webapp.kotive.com/api').get('/areyouthere').reply(200, 'OK');
    const client = new Client('foo', 'bar');
    client.ping(r => {
      assert.equal(200, r);
      done();
    });
  });
  it('enable promises', () => {
    const client = new Client('foo', 'bar').usePromises();
    assert.equal(true, client.promises);
  });
});
