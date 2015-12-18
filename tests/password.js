import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('auth', () => {
  it('password should be reset', done => {
    nock('https://webapp.kotive.com/api').post('/user/resetpassword', {email: 'jenkins.daniel.02@gmail.com'}).reply(200, 'OK');
    const client = new Client('foo', 'bar').usePromises();
    client.auth.passwordReset({
      email: 'jenkins.daniel.02@gmail.com'
    }).then(r => {
      console.log(r);
      console.log(r.status);
      assert.equal(200, r.status);
      done();
    });
  });
});
