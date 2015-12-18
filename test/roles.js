import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('roles', () => {
  it('list a user\'s roles', done => {
    nock('https://webapp.kotive.com/api').get('/group/246/personRoles?personId=133').basicAuth({user: 'jenkins.daniel.02@gmail.com', pass: '123456'}).reply(200);
    const client = new Client('jenkins.daniel.02@gmail.com', '123456').usePromises();
    client.roles.get(246, 133).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
});
