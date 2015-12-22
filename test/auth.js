import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('auth', () => {
  it('should be able to login', done => {
    nock('https://webapp.kotive.com/api').get('/login').basicAuth({user: 'jenkins.daniel.02@gmail.com', pass: '123456'}).reply(200);
    const client = new Client('jenkins.daniel.02@gmail.com', '123456').usePromises();
    client.auth.login().then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('password should be reset', done => {
    nock('https://webapp.kotive.com/api').post('/user/resetpassword', {email: 'jenkins.daniel.02@gmail.com'}).reply(200, 'OK');
    const client = new Client('jenkins.daniel.02@gmail.com', '123456').usePromises();
    client.auth.passwordReset({
      email: 'jenkins.daniel.02@gmail.com'
    }).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
});
