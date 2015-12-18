import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('auth', () => {
  this.timeout(0);
  it('should be able to login', done => {
    nock('https://webapp.kotive.com/api').get('/login').basicAuth({user: 'jenkins.daniel.02@gmail.com', pass: '123456'}).reply(function (uri, requestBody) {
      console.log(requestBody);
      console.log('path:', this.req);
      console.log('headers:', this.req.headers);
    });
    const client = new Client('jenkins.daniel.02@gmail.com', '123456').usePromises();
    client.auth.login().then(() => {
      assert.equal(200);
      done();
    });
  });
  // it('password should be reset', done => {
  //   setTimeout(done, 10000);
  //   nock('https://webapp.kotive.com/api').post('/user/resetpassword', {email: 'example@example.com'}).reply(200, 'OK');
  //   const client = new Client('jenkins.daniel.02@gmail.com', '123456').usePromises();
  //   client.auth.passwordReset({
  //     email: 'example@example.com'
  //   }).then(r => {
  //     assert.equal(200, r.status);
  //     done();
  //   });
  // });
});
