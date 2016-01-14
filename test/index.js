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
});
